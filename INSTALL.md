# CVScan Installation & Running Guide

## 📦 Project Overview

Your CVScan application has been fully created with the following structure:

```
CVScan/
├── 📁 server/              # Node.js/Express Backend
│   ├── server.js           # Main server with API endpoints
│   ├── package.json        # Backend dependencies
│   └── .env               # Configuration
│
├── 📁 client/              # React Frontend
│   ├── 📁 public/
│   │   └── index.html
│   ├── 📁 src/
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # Entry point
│   │   ├── App.css         # App styling
│   │   ├── index.css       # Global styles
│   │   └── 📁 components/
│   │       ├── JobDescriptionSection.js
│   │       ├── JobDescriptionSection.css
│   │       ├── ResumeSection.js
│   │       └── ResumeSection.css
│   ├── package.json        # Frontend dependencies
│   └── .env               # Configuration
│
├── 📁 ai-service/          # Python AI/NLP Module
│   ├── app.py             # Flask API for AI analysis
│   └── requirements.txt    # Python dependencies
│
├── README.md              # Full documentation
├── QUICKSTART.md          # Quick start guide
├── setup.bat              # Windows automated setup
└── setup.sh               # Unix automated setup
```

## ⚡ Quick Install (Choose One)

### Option A: Automated Setup (Recommended)

#### Windows:
```batch
setup.bat
```

#### macOS/Linux:
```bash
chmod +x setup.sh
./setup.sh
```

### Option B: Manual Installation

#### 1. Backend Setup
```bash
cd server
npm install
```

#### 2. Frontend Setup
```bash
cd client
npm install
```

#### 3. AI Service Setup (Optional)
```bash
cd ai-service
pip install -r requirements.txt
```

## 🚀 Running the Application

You will need **3 Terminal Windows** to run all services. Open them side by side:

### Terminal 1️⃣: Start Backend Server
```bash
cd server
npm start
```
✓ Server runs on: http://localhost:5000
✓ You should see: "Server is running on http://localhost:5000"

### Terminal 2️⃣: Start Frontend (Main App)
```bash
cd client
npm start
```
✓ App opens at: http://localhost:3000
✓ Browser will auto-open with the application

### Terminal 3️⃣: Start AI Service (Optional but Recommended)
```bash
cd ai-service
python app.py
```
✓ AI Service runs on: http://localhost:5001
✓ You should see: "Running on http://127.0.0.1:5001"

## 🎨 Using the Application

1. **Open** http://localhost:3000 in your browser
2. **Left Panel - Job Description**:
   - Paste or type a job description
   - Click "🔍 Analyze JD"
   - View extracted skills and requirements

3. **Right Panel - Resume Analysis**:
   - Upload a PDF or DOCX resume file
   - Click "🧠 Compare & Rate"
   - Get matching score and detailed analysis

## ✨ Key Features

### Job Description Analysis
- ✓ Extracts required skills automatically
- ✓ Identifies experience requirements
- ✓ Detects technologies and tools
- ✓ Highlights key terms

### Resume Analysis & Matching
- ✓ Matches skills against job requirements
- ✓ Generates matching percentage (0-100%)
- ✓ Shows matched and missing skills
- ✓ Identifies duplicate sentences
- ✓ Highlights key matching competencies

### Matching Score Interpretation
- 🔴 **0-50%**: Low Match (significant gaps)
- 🟡 **50-75%**: Medium Match (some alignment)
- 🟢 **75-100%**: High Match (strong fit)

## 🔧 Troubleshooting

### Issue: "Port 5000 already in use"
**Solution**: Edit `server/.env`
```
PORT=5001
```
Then update React to use new port:
```
REACT_APP_API_URL=http://localhost:5001
```

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: "python: command not found"
**Solution**: Install Python from https://www.python.org/

### Issue: File upload not working
**Solution**:
1. Ensure backend is running
2. Check file size < 10MB
3. Verify file is PDF or DOCX
4. Check browser console (F12) for errors

### Issue: React app won't start
**Solution**:
```bash
cd client
npm cache clean --force
rm -rf node_modules
npm install
npm start
```

## 📊 API Endpoints

### Backend API (Node.js)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/extract-resume` | Upload and extract resume text |
| POST | `/api/analyze-jd` | Analyze job description |
| POST | `/api/analyze-match` | Compare resume with JD |

### AI Service API (Python)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/analyze-skills` | Extract skills from text |
| POST | `/analyze-experience` | Extract experience info |
| POST | `/compare-texts` | Find text similarities |

## 🎯 Testing the App

### Sample Job Description:
```
Senior Full Stack Developer

Requirements:
- 5+ years of experience with JavaScript and Python
- Strong knowledge of React.js and Node.js
- Experience with AWS and Docker
- SQL and MongoDB database experience
- Git and CI/CD pipelines
- Agile development methodology
```

### Expected Results:
- Skills: javascript, python, react, nodejs, aws, docker, sql, mongodb, git
- Experience: 5+ years
- Match Score: Depends on your resume

## 📝 Environment Configuration

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

### AI Service (app.py)
```python
port = os.environ.get('PORT', 5001)
```

## 🚀 Production Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy 'build' folder
```

### Backend (Heroku/AWS)
```bash
# Set environment variables
# Deploy server directory
npm install --production
npm start
```

## 📱 Browser Compatibility

- ✓ Chrome/Chromium (latest)
- ✓ Firefox (latest)
- ✓ Safari (latest)
- ✓ Edge (latest)

## 🔐 Security Considerations

- Local-only processing (no cloud upload)
- Temporary file storage in memory
- Add CORS validation in production
- Implement rate limiting
- Add authentication for production use

## 📚 Project Dependencies

### Backend
- express: Web framework
- multer: File upload handling
- cors: Cross-Origin Resource Sharing
- pdfparse: PDF text extraction
- axios: HTTP client

### Frontend
- react: UI library
- axios: HTTP client
- react-scripts: Build tools

### AI Service
- flask: Web framework
- nltk: Natural Language Toolkit
- flask-cors: CORS support

## 🆘 Getting Help

1. Check **QUICKSTART.md** for common tasks
2. Review **README.md** for full documentation
3. Check browser console (F12) for errors
4. Check terminal output for backend/AI service logs

## ✅ Verification Checklist

Before using, verify:
- [ ] Node.js installed (`node -v` returns v16+)
- [ ] npm installed (`npm -v` returns 7+)
- [ ] Python installed (`python --version` returns 3.8+)
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] All 3 services starting without errors

## 🎉 Success Indicators

✓ Backend: "Server is running on http://localhost:5000"
✓ Frontend: Browser opens at http://localhost:3000
✓ AI Service: "Running on http://127.0.0.1:5001"

## 📞 Support

For detailed information:
- See **README.md** - Complete documentation
- See **QUICKSTART.md** - Quick reference

---

**You're all set! Start the three services and navigate to http://localhost:3000 🚀**
