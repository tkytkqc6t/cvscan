const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File upload setup
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and DOCX are allowed.'));
    }
  }
});

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Extract text from uploaded resume
app.post('/api/extract-resume', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    let resumeText = '';
    const fileBuffer = req.file.buffer;
    const mimetype = req.file.mimetype;

    if (mimetype === 'application/pdf') {
      // PDF parsing - using pdfparse
      const pdfParse = require('pdf-parse');
      const data = await pdfParse(fileBuffer);
      resumeText = data.text;
    } else if (mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      // DOCX parsing - using docx package
      const { Document } = require('docx');
      // Note: docx parsing requires different approach
      // Using a simpler method with fs and unzipping
      resumeText = await extractDocxText(fileBuffer);
    }

    res.json({ 
      success: true, 
      text: resumeText,
      fileName: req.file.originalname
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Analyze job description
app.post('/api/analyze-jd', async (req, res) => {
  try {
    const { jobDescription } = req.body;
    
    if (!jobDescription) {
      return res.status(400).json({ error: 'Job description is required' });
    }

    // Call AI service for analysis
    const analysis = await analyzeJobDescription(jobDescription);
    
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Analyze resume and compare with JD
app.post('/api/analyze-match', async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    
    if (!resumeText || !jobDescription) {
      return res.status(400).json({ error: 'Resume text and job description are required' });
    }

    // Call AI service for matching analysis
    const matchAnalysis = await analyzeMatchingScore(resumeText, jobDescription);
    
    res.json(matchAnalysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AI analysis functions (placeholder - can be replaced with actual AI service calls)
async function analyzeJobDescription(jd) {
  // This would call the Python AI service or external AI API
  // For now, returning a structured response
  const skills = extractSkills(jd);
  const experience = extractExperience(jd);
  
  return {
    requiredSkills: skills,
    requiredExperience: experience,
    rawAnalysis: {
      keyTerms: extractKeyTerms(jd),
      technologies: extractTechnologies(jd)
    }
  };
}

async function analyzeMatchingScore(resumeText, jobDescription) {
  const jdSkills = extractSkills(jobDescription);
  const resumeSkills = extractSkills(resumeText);
  
  const matchedSkills = findMatchingSkills(jdSkills, resumeSkills);
  const matchScore = calculateMatchScore(matchedSkills, jdSkills);
  
  // Remove duplicate sentences
  const uniqueResumeContent = removeDuplicateSentences(resumeText, jobDescription);
  
  return {
    matchScore: matchScore,
    matchPercentage: Math.round(matchScore * 100),
    matchedSkills: matchedSkills,
    missingSkills: findMissingSkills(jdSkills, resumeSkills),
    resumeValidation: {
      duplicateSentencesRemoved: countDuplicates(resumeText, jobDescription),
      cleanedResume: uniqueResumeContent,
      highlights: getHighlights(resumeText, matchedSkills)
    }
  };
}

// Helper functions
function extractSkills(text) {
  // Simple skill extraction - can be enhanced with NLP
  const commonSkills = ['javascript', 'python', 'java', 'react', 'node', 'sql', 'docker', 'aws', 'kubernetes', 'git', 'agile', 'rest', 'api', 'html', 'css', 'typescript', 'mongodb', 'postgresql', 'linux', 'cloud'];
  const lowerText = text.toLowerCase();
  return commonSkills.filter(skill => lowerText.includes(skill));
}

function extractExperience(text) {
  // Extract years of experience
  const experiencePattern = /(\d+)\s*\+?\s*years?\s+of\s+experience/gi;
  const matches = text.match(experiencePattern);
  return matches ? matches : [];
}

function extractKeyTerms(text) {
  // Simple key term extraction
  return text.split(/[\s,.;:]/).filter(word => word.length > 5).slice(0, 10);
}

function extractTechnologies(text) {
  const techs = ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'GitHub', 'Jira', 'Confluence', 'React', 'Angular', 'Vue', 'Node.js', 'Python', 'Java'];
  return techs.filter(tech => text.includes(tech));
}

function findMatchingSkills(jdSkills, resumeSkills) {
  return jdSkills.filter(skill => resumeSkills.includes(skill));
}

function findMissingSkills(jdSkills, resumeSkills) {
  return jdSkills.filter(skill => !resumeSkills.includes(skill));
}

function calculateMatchScore(matchedSkills, totalSkills) {
  if (totalSkills.length === 0) return 0;
  return matchedSkills.length / totalSkills.length;
}

function removeDuplicateSentences(resume, jd) {
  const resumeSentences = resume.split(/[.!?]+/).map(s => s.trim());
  const jdSentences = jd.split(/[.!?]+/).map(s => s.trim());
  
  return resumeSentences
    .filter(sentence => !jdSentences.some(jdSent => 
      jdSent.toLowerCase().includes(sentence.toLowerCase()) && sentence.length > 10
    ))
    .join('. ');
}

function countDuplicates(resume, jd) {
  const resumeSentences = resume.split(/[.!?]+/).map(s => s.trim());
  const jdSentences = jd.split(/[.!?]+/).map(s => s.trim());
  
  return resumeSentences.filter(sentence => 
    jdSentences.some(jdSent => 
      jdSent.toLowerCase() === sentence.toLowerCase() && sentence.length > 10
    )
  ).length;
}

function getHighlights(resumeText, matchedSkills) {
  const highlights = [];
  matchedSkills.forEach(skill => {
    const regex = new RegExp(skill, 'gi');
    const matches = resumeText.match(regex);
    if (matches) {
      highlights.push({
        skill: skill,
        count: matches.length
      });
    }
  });
  return highlights;
}

async function extractDocxText(buffer) {
  // Placeholder for DOCX extraction
  // In production, use proper library
  return "Document extraction requires proper DOCX library setup";
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
