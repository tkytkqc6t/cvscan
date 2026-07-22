# CVScan - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites First
Make sure you have installed:
- **Git**: https://git-scm.com/
- **Node.js**: https://nodejs.org/
- **Python 3**: https://python.org/

### Option 1: Automated Setup (Windows - First Time)

Run the installation script:
```
.\windows_install.bat
```

This will clone the repo, install all dependencies, and start everything!

### Option 2: Automated Setup (macOS/Linux - First Time)

```bash
chmod +x macos_install.sh
./macos_install.sh
```

### Option 3: Quick Start (After Installation)

**Windows:**
```
.\run.bat
```

**macOS/Linux:**
```bash
./run.sh
```

### Option 4: Manual Setup

#### Step 1: Install Backend Dependencies
```bash
cd server
npm install
```

#### Step 2: Install Frontend Dependencies
```bash
cd client
npm install
```

#### Step 3: Install AI Service Dependencies (Optional)
```bash
cd ai-service
pip install -r requirements.txt
```

## 🎬 Running the Application

### Terminal 1: Start Backend Server
```bash
cd server
npm start
```
✓ Backend will run on http://localhost:5000

### Terminal 2: Start Frontend Application
```bash
cd client
npm start
```
✓ Frontend will open at http://localhost:3000

### Terminal 3 (Optional): Start AI Service
```bash
cd ai-service
python app.py
```
✓ AI service will run on http://localhost:5001

## 📝 First Use

1. Open http://localhost:3000 in your browser
2. Paste a job description in the left panel
3. Click "🔍 Analyze JD"
4. Upload your resume (PDF or DOCX) in the right panel
5. Click "🧠 Compare & Rate"
6. Review your matching score and skills analysis

## 🔧 Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:

**Backend**: Edit `server/.env` and change the PORT
```
PORT=5001
```

**Frontend**: Set the port when starting:
```bash
PORT=3001 npm start
```

### Dependencies Not Installing

**For Node.js**:
```bash
npm cache clean --force
npm install
```

**For Python**:
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### File Upload Not Working
- Ensure backend server is running on http://localhost:5000
- Check browser console (F12) for errors
- Verify file size is less than 10MB
- Ensure file is PDF or DOCX format

## 📚 API Documentation

### Extract Resume
```
POST /api/extract-resume
Content-Type: multipart/form-data

Body: 
  resume: [file]

Response:
{
  "success": true,
  "text": "extracted resume text",
  "fileName": "resume.pdf"
}
```

### Analyze Job Description
```
POST /api/analyze-jd
Content-Type: application/json

Body:
{
  "jobDescription": "job description text"
}

Response:
{
  "requiredSkills": ["skill1", "skill2"],
  "requiredExperience": ["experience requirements"],
  "rawAnalysis": {
    "keyTerms": [...],
    "technologies": [...]
  }
}
```

### Analyze Match
```
POST /api/analyze-match
Content-Type: application/json

Body:
{
  "resumeText": "resume text",
  "jobDescription": "job description text"
}

Response:
{
  "matchScore": 0.85,
  "matchPercentage": 85,
  "matchedSkills": ["skill1", "skill2"],
  "missingSkills": ["skill3"],
  "resumeValidation": {
    "duplicateSentencesRemoved": 2,
    "cleanedResume": "cleaned text",
    "highlights": [...]
  }
}
```

## 🎨 Customization

### Change Matching Thresholds
Edit `server/server.js` - `calculateMatchScore()` function

### Add More Skills
Edit `server/server.js` - Update `extractSkills()` function or `commonSkills` array

### Customize UI Theme
Edit `client/src/index.css` - Modify color gradients and theme variables

## 📋 System Requirements

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **Python**: v3.8 or higher
- **RAM**: 2GB minimum
- **Disk Space**: 500MB minimum
- **Browser**: Modern browser with ES6 support

## 🔐 Security Notes

- All data is processed locally
- No external API calls by default
- Uploaded files are temporarily stored in memory
- Implement proper authentication for production use
- Add rate limiting to API endpoints for production

## 🚀 Production Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'build' folder
```

### Backend Deployment (Heroku/AWS/DigitalOcean)
```bash
# Set environment variables
# PORT, NODE_ENV, etc.

# Start server
npm start
```

## 📞 Support

For issues:
1. Check the troubleshooting section above
2. Review browser console errors (F12)
3. Check server logs in terminal
4. Create an issue in the repository

## 🎯 Next Steps

1. ✅ Get the app running
2. 📖 Read the full README.md
3. 🔧 Customize for your needs
4. 🚀 Deploy to production

---

**Happy Resume Scanning! 📄✨**
