from flask import Flask, request, jsonify
from flask_cors import CORS
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
import re
import os

# Download required NLTK data
try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')

try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')

app = Flask(__name__)
CORS(app)

# Common technical skills database
TECHNICAL_SKILLS = [
    'python', 'javascript', 'java', 'csharp', 'c++', 'ruby', 'php', 'swift', 'kotlin',
    'react', 'angular', 'vue', 'nodejs', 'express', 'django', 'flask', 'spring',
    'sql', 'nosql', 'mongodb', 'postgresql', 'mysql', 'redis', 'elasticsearch',
    'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'jenkins', 'git', 'gitlab', 'github',
    'linux', 'windows', 'rest', 'graphql', 'api', 'microservices', 'agile', 'scrum',
    'html', 'css', 'sass', 'webpack', 'git', 'ci/cd', 'devops', 'machine learning',
    'tensorflow', 'pytorch', 'opencv', 'numpy', 'pandas', 'scikit-learn'
]

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'AI Service is running'})

@app.route('/analyze-skills', methods=['POST'])
def analyze_skills():
    """Extract and analyze skills from text"""
    try:
        data = request.json
        text = data.get('text', '')
        
        if not text:
            return jsonify({'error': 'No text provided'}), 400
        
        skills = extract_skills(text)
        return jsonify({
            'skills': skills,
            'count': len(skills)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/analyze-experience', methods=['POST'])
def analyze_experience():
    """Extract years of experience"""
    try:
        data = request.json
        text = data.get('text', '')
        
        if not text:
            return jsonify({'error': 'No text provided'}), 400
        
        experience = extract_experience(text)
        return jsonify({
            'experience': experience
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/compare-texts', methods=['POST'])
def compare_texts():
    """Compare two texts and find similarities"""
    try:
        data = request.json
        text1 = data.get('text1', '')
        text2 = data.get('text2', '')
        
        if not text1 or not text2:
            return jsonify({'error': 'Both texts are required'}), 400
        
        similarity = calculate_similarity(text1, text2)
        duplicates = find_duplicate_sentences(text1, text2)
        
        return jsonify({
            'similarity_score': similarity,
            'duplicate_sentences': duplicates,
            'duplicate_count': len(duplicates)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def extract_skills(text):
    """Extract technical skills from text"""
    text_lower = text.lower()
    skills = []
    
    for skill in TECHNICAL_SKILLS:
        # Use word boundary to avoid partial matches
        pattern = r'\b' + re.escape(skill) + r'\b'
        if re.search(pattern, text_lower):
            skills.append(skill)
    
    return sorted(list(set(skills)))

def extract_experience(text):
    """Extract years of experience from text"""
    pattern = r'(\d+)\s*\+?\s*years?\s+of\s+experience'
    matches = re.findall(pattern, text, re.IGNORECASE)
    
    if matches:
        return {
            'years': [int(m) for m in matches],
            'max_years': max([int(m) for m in matches]),
            'min_years': min([int(m) for m in matches])
        }
    return {'years': [], 'max_years': 0, 'min_years': 0}

def calculate_similarity(text1, text2):
    """Calculate similarity between two texts using simple word overlap"""
    words1 = set(word_tokenize(text1.lower()))
    words2 = set(word_tokenize(text2.lower()))
    
    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    words1 = words1 - stop_words
    words2 = words2 - stop_words
    
    if not words1 or not words2:
        return 0
    
    intersection = len(words1.intersection(words2))
    union = len(words1.union(words2))
    
    similarity = intersection / union if union > 0 else 0
    return round(similarity, 3)

def find_duplicate_sentences(text1, text2):
    """Find sentences that appear in both texts"""
    sentences1 = sent_tokenize(text1)
    sentences2 = sent_tokenize(text2)
    
    duplicates = []
    
    for sent1 in sentences1:
        sent1_normalized = sent1.lower().strip()
        for sent2 in sentences2:
            sent2_normalized = sent2.lower().strip()
            
            # Check for exact match or high similarity
            if sent1_normalized == sent2_normalized:
                duplicates.append({
                    'sentence': sent1.strip(),
                    'type': 'exact'
                })
            elif similarity_ratio(sent1_normalized, sent2_normalized) > 0.8:
                duplicates.append({
                    'sentence': sent1.strip(),
                    'type': 'similar'
                })
    
    return duplicates

def similarity_ratio(str1, str2):
    """Calculate similarity ratio between two strings"""
    longer = str1 if len(str1) > len(str2) else str2
    shorter = str2 if len(str1) > len(str2) else str1
    
    if len(longer) == 0:
        return 1.0
    
    edit_distance = levenshtein_distance(longer, shorter)
    return (len(longer) - edit_distance) / float(len(longer))

def levenshtein_distance(s1, s2):
    """Calculate Levenshtein distance between two strings"""
    if len(s1) < len(s2):
        return levenshtein_distance(s2, s1)
    
    if len(s2) == 0:
        return len(s1)
    
    previous_row = range(len(s2) + 1)
    for i, c1 in enumerate(s1):
        current_row = [i + 1]
        for j, c2 in enumerate(s2):
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row
    
    return previous_row[-1]

if __name__ == '__main__':
    port = os.environ.get('PORT', 5001)
    app.run(debug=True, port=port)
