# CVScan - Resume Validation & Scoring Platform

A comprehensive web application that validates and rates resumes against job descriptions using AI algorithms. The app analyzes skills, experience, and provides a matching score.

## 🎯 Features

- **Two-Column Layout**: 
  - Left: Job Description input with skill extraction
  - Right: Resume upload and analysis
- **Resume Upload**: Support for PDF and DOCX formats
- **AI Analysis**:
  - Extract required skills from job description
  - Analyze candidate's skills and experience
  - Compare resume with job requirements
  - Generate matching score (0-100%)
  - Highlight key matching skills
  - Identify duplicate sentences between JD and resume
  - Suggest missing skills

## 📋 Project Structure

```
CVScan/
├── server/                 # Node.js/Express backend
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── client/                # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── JobDescriptionSection.js
│   │   │   └── ResumeSection.js
│   │   └── styles
│   └── package.json
├── ai-service/            # Python AI module
│   ├── app.py
│   └── requirements.txt
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Axios, CSS3
- **Backend**: Node.js, Express, Multer (file handling)
- **AI/NLP**: Python with NLTK
- **File Processing**: PDF-parse, DOCX support

## ✅ Prerequisites

Before installing CVScan, ensure you have:
- **Git** (v2.30+): https://git-scm.com/
- **Node.js** (v16+ or v18+ LTS): https://nodejs.org/
- **Python 3** (v3.8+): https://python.org/

Verify installation:
```bash
git --version
node --version
npm --version
python --version
```

## 📦 Installation

### Option 1: Automated Installation (Recommended)

**Windows:**
```bash
.\windows_install.bat
```

**macOS/Linux:**
```bash
chmod +x macos_install.sh
./macos_install.sh
```

This script will:
1. Clone the repository
2. Install all dependencies
3. Start all services
4. Open the app in your browser

### Option 2: Manual Setup

**Clone Repository:**
```bash
git clone https://github.com/tkytkqc6t/cvscan.git
cd cvscan
```

**Backend Setup

```bash
cd server
npm install
```

### Frontend Setup

```bash
cd client
npm install
```

### AI Service Setup

```bash
cd ai-service
pip install -r requirements.txt
```

## 🚀 Running the Application

### 1. Start the Backend Server

```bash
cd server
npm start
# or for development with auto-reload
npm run dev
```

The server will run on `http://localhost:5000`

### 2. Start the Frontend (in another terminal)

```bash
cd client
npm start
```

The app will open at `http://localhost:3000`

### 3. Start the AI Service (optional, in another terminal)

```bash
cd ai-service
python app.py
```

The AI service will run on `http://localhost:5001`

## 📖 How to Use

1. **Paste Job Description**: In the left panel, paste the job description you want to analyze
2. **Click "Analyze JD"**: The system extracts required skills and experience
3. **Upload Resume**: Drag and drop or click to upload a PDF or DOCX resume in the right panel
4. **Click "Compare & Rate"**: The system:
   - Compares the resume with the job description
   - Generates a matching score
   - Highlights matching skills
   - Identifies missing skills
   - Shows duplicate content

## 🔍 Analysis Features

### Job Description Analysis
- Extracts required technical skills
- Identifies years of experience required
- Finds key technologies mentioned
- Extracts key terms and requirements

### Resume Validation
- Removes duplicate sentences found in JD
- Extracts candidate skills and experience
- Calculates skill match percentage
- Provides skill-by-skill comparison
- Highlights frequently mentioned skills

### Matching Score
- **0-50%**: Low match - significant skill gaps
- **50-75%**: Medium match - meets some requirements
- **75-100%**: High match - strong candidate fit

## 📝 API Endpoints

### Backend (Node.js)

- `GET /health` - Health check
- `POST /api/extract-resume` - Extract text from uploaded resume (PDF/DOCX)
- `POST /api/analyze-jd` - Analyze job description
- `POST /api/analyze-match` - Compare resume with JD and generate score

### AI Service (Python)

- `GET /health` - Health check
- `POST /analyze-skills` - Extract skills from text
- `POST /analyze-experience` - Extract experience information
- `POST /compare-texts` - Find similarities between texts

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `server` directory:

```
PORT=5000
NODE_ENV=development
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚧 Future Enhancements

- Integration with advanced NLP models (BERT, GPT)
- Resume template matching
- Salary expectation analysis
- Interview readiness scoring
- Email notification system
- Resume improvement suggestions
- Dashboard and analytics
- User authentication and history

## 📄 File Upload Specifications

- **Formats Supported**: PDF (.pdf), DOCX (.docx)
- **Max File Size**: 10MB (configurable)
- **Supported PDF Types**: Standard PDF documents
- **Supported DOCX Types**: Microsoft Word 2007+

## ⚠️ Important Notes

- The AI analysis uses pattern matching and NLP
- For production use, consider integrating with advanced AI services
- Ensure API keys are properly configured for external AI services
- Always validate extracted data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 📞 Support

For issues, questions, or suggestions, please create an issue in the repository.

## 🔐 Privacy

- All data is processed locally or on your servers
- No data is sent to third parties unless explicitly configured
- Uploaded files are stored temporarily and can be deleted
- Respect user privacy and comply with data protection regulations

---

**Happy Matching! 🚀**
