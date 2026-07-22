# 📑 CVScan - Complete File Index

## 📁 Directory Structure

```
CVScan/
├── 📄 README.md                 # Full project documentation
├── 📄 QUICKSTART.md             # 5-minute quick start guide
├── 📄 INSTALL.md                # Detailed installation instructions
├── 📄 GETTING_STARTED.md        # Setup checklist
├── 📄 PROJECT_SUMMARY.md        # Project overview
├── 📄 SAMPLE_DATA.md            # Test data samples
├── 📄 FILE_INDEX.md             # This file
├── 📄 .gitignore                # Git ignore rules
├── 📄 setup.bat                 # Windows automated setup
├── 📄 setup.sh                  # Unix/Linux/Mac setup
│
├── 📁 server/                   # Backend (Node.js/Express)
│   ├── 📄 server.js             # Main API server
│   ├── 📄 package.json          # Dependencies
│   ├── 📄 .env                  # Configuration
│   └── 📄 README.md             # Backend documentation
│
├── 📁 client/                   # Frontend (React)
│   ├── 📁 public/
│   │   ├── 📄 index.html        # HTML entry point
│   │   └── 📄 favicon.ico       # Browser tab icon
│   ├── 📁 src/
│   │   ├── 📄 App.js            # Main React component
│   │   ├── 📄 App.css           # App styling
│   │   ├── 📄 index.js          # React entry point
│   │   ├── 📄 index.css         # Global styles
│   │   └── 📁 components/
│   │       ├── 📄 JobDescriptionSection.js
│   │       ├── 📄 JobDescriptionSection.css
│   │       ├── 📄 ResumeSection.js
│   │       └── 📄 ResumeSection.css
│   ├── 📄 package.json          # Dependencies
│   ├── 📄 .env                  # Configuration
│   └── 📄 .gitignore            # Git ignore rules
│
└── 📁 ai-service/               # AI/NLP Module (Python/Flask)
    ├── 📄 app.py                # Flask API server
    ├── 📄 requirements.txt       # Python dependencies
    └── 📄 .env                  # Configuration
```

---

## 📋 File Descriptions

### Root Level Files

| File | Purpose | Size | Type |
|------|---------|------|------|
| **README.md** | Complete project documentation | 8KB | Documentation |
| **QUICKSTART.md** | 5-minute quick start guide | 5KB | Guide |
| **INSTALL.md** | Detailed installation instructions | 6KB | Guide |
| **GETTING_STARTED.md** | Setup checklist and first steps | 4KB | Checklist |
| **PROJECT_SUMMARY.md** | Project overview and features | 7KB | Overview |
| **SAMPLE_DATA.md** | Test data and sample content | 5KB | Data |
| **FILE_INDEX.md** | This file - directory reference | 3KB | Reference |
| **.gitignore** | Git ignore rules | 0.5KB | Config |
| **setup.bat** | Windows automated setup script | 1KB | Script |
| **setup.sh** | Unix/Linux/Mac setup script | 1KB | Script |

### Backend Files (server/)

| File | Purpose | Lines | Type |
|------|---------|-------|------|
| **server.js** | Express API server with endpoints | 280 | JavaScript |
| **package.json** | Node.js dependencies | 25 | JSON |
| **.env** | Environment configuration | 2 | Config |

**Backend Features:**
- ✅ File upload handling (PDF/DOCX)
- ✅ Resume text extraction
- ✅ Job description analysis
- ✅ Resume-to-JD comparison
- ✅ Skill matching algorithm
- ✅ Matching score calculation

### Frontend Files (client/)

| File | Purpose | Lines | Type |
|------|---------|-------|------|
| **public/index.html** | HTML entry point | 15 | HTML |
| **src/App.js** | Main React container | 95 | JavaScript |
| **src/App.css** | App styling | 50 | CSS |
| **src/index.js** | React entry point | 10 | JavaScript |
| **src/index.css** | Global styles | 350 | CSS |
| **src/components/JobDescriptionSection.js** | Left panel component | 60 | JavaScript |
| **src/components/JobDescriptionSection.css** | Left panel styling | 80 | CSS |
| **src/components/ResumeSection.js** | Right panel component | 140 | JavaScript |
| **src/components/ResumeSection.css** | Right panel styling | 200 | CSS |
| **package.json** | React dependencies | 30 | JSON |
| **.env** | Frontend configuration | 1 | Config |

**Frontend Features:**
- ✅ Two-column responsive layout
- ✅ Job description input
- ✅ File upload with drag-and-drop
- ✅ Real-time analysis display
- ✅ Matching score visualization
- ✅ Skill badges and highlights
- ✅ Mobile responsive design

### AI Service Files (ai-service/)

| File | Purpose | Lines | Type |
|------|---------|-------|------|
| **app.py** | Flask NLP server | 200 | Python |
| **requirements.txt** | Python dependencies | 4 | Text |

**AI Features:**
- ✅ Skill extraction from text
- ✅ Experience detection
- ✅ Text similarity analysis
- ✅ Duplicate sentence detection
- ✅ Natural language processing

---

## 🔄 File Relationships

```
User Browser (http://localhost:3000)
         ↓
    Client/App.js
         ↓
    ├─ JobDescriptionSection.js (Left Panel)
    │         ↓
    │    axios → /api/analyze-jd
    │         ↓
    │     Backend server.js → Python AI Service
    │
    └─ ResumeSection.js (Right Panel)
              ↓
         ├─ axios → /api/extract-resume (Upload)
         │         ↓
         │    server.js (PDF/DOCX parsing)
         │
         └─ axios → /api/analyze-match (Analyze)
                    ↓
               server.js + Python AI Service
```

---

## 📦 Dependencies

### Frontend (React)
- react@18.2.0
- axios@1.4.0
- react-scripts@5.0.1

### Backend (Node.js)
- express@4.18.2
- multer@1.4.5
- cors@2.8.5
- pdfparse@1.1.1
- docx@8.5.0
- axios@1.4.0

### AI Service (Python)
- flask@2.3.2
- flask-cors@4.0.0
- nltk@3.8.1

---

## 🚀 How Files Work Together

### When User Analyzes Job Description

```
1. User pastes text in JobDescriptionSection.js
2. Clicks "Analyze JD" button
3. handleAnalyzeJD() sends POST to /api/analyze-jd
4. server.js processes request
5. Calls extractSkills(), extractExperience()
6. Returns analysis to client
7. JobDescriptionSection displays results
```

### When User Uploads Resume

```
1. User uploads file in ResumeSection.js
2. handleFileUpload() creates FormData
3. Sends POST to /api/extract-resume with file
4. server.js receives and processes
5. PDF/DOCX parser extracts text
6. Returns extracted text to client
7. ResumeSection displays filename
```

### When User Clicks Compare & Rate

```
1. User clicks "Compare & Rate" button in ResumeSection.js
2. handleAnalyzeMatch() sends POST to /api/analyze-match
3. Includes resumeText and jobDescription
4. server.js processes with analyzeMatchingScore()
5. Calculates matching score
6. Finds duplicate sentences
7. Returns detailed analysis
8. ResumeSection displays score, skills, highlights
```

---

## � Setup & Run Scripts

| File | Purpose | When to Use |
|------|---------|-------------|
| **windows_install.bat** | Full Windows installation | First time setup (clones repo + installs dependencies) |
| **macos_install.sh** | Full macOS/Linux installation | First time setup (clones repo + installs dependencies) |
| **run.bat** | Quick Windows startup | After installation (recurring use) |
| **run.sh** | Quick macOS/Linux startup | After installation (recurring use) |

---

## �📝 File Configuration Examples

### .env Files

**server/.env:**
```
PORT=5000
NODE_ENV=development
```

**client/.env:**
```
REACT_APP_API_URL=http://localhost:5000
```

**ai-service/.env:**
```
FLASK_ENV=development
PORT=5001
```

---

## 🔐 Important Files for Customization

| File | What to Customize | Example |
|------|-------------------|---------|
| server.js | Add more skills | Edit `commonSkills` array |
| server.js | Change matching logic | Edit `calculateMatchScore()` |
| client/src/index.css | Change colors/theme | Modify gradient colors |
| client/src/components/* | Change UI layout | Modify component JSX |
| ai-service/app.py | Enhance NLP analysis | Add new analysis functions |

---

## 📊 File Statistics

| Category | Count | Lines | Size |
|----------|-------|-------|------|
| Documentation | 7 | 1000+ | 35KB |
| Backend | 3 | 280 | 8KB |
| Frontend | 11 | 900 | 25KB |
| AI Service | 2 | 200 | 6KB |
| Config | 6 | 50 | 2KB |
| **Total** | **29** | **2420+** | **76KB** |

---

## 🎯 Quick File Navigation

### I want to...

**Change how skills are extracted**
→ Edit `server/server.js` - `extractSkills()` function

**Change the UI colors**
→ Edit `client/src/index.css` - Color gradients

**Add new API endpoint**
→ Edit `server/server.js` - Add new `app.post()` route

**Change frontend layout**
→ Edit `client/src/App.js` or component files

**Improve AI analysis**
→ Edit `ai-service/app.py` - Enhancement functions

**Change scoring algorithm**
→ Edit `server/server.js` - `calculateMatchScore()` function

**Add database integration**
→ Edit `server/server.js` - Add database calls

**Deploy the app**
→ Follow instructions in `INSTALL.md`

**Get started quickly**
→ Follow checklist in `GETTING_STARTED.md`

**Test with sample data**
→ Use samples from `SAMPLE_DATA.md`

---

## 🔗 File Cross-References

### App.js uses:
- JobDescriptionSection.js
- ResumeSection.js
- axios for API calls
- state management

### JobDescriptionSection.js imports:
- React
- axios
- CSS file

### ResumeSection.js imports:
- React
- axios
- CSS file

### server.js provides:
- /api/extract-resume endpoint
- /api/analyze-jd endpoint
- /api/analyze-match endpoint

### client/index.js loads:
- App.js component
- index.css global styles

---

## ✅ File Checklist

All essential files have been created:

- ✅ Backend server implementation
- ✅ Frontend React application
- ✅ AI/NLP Python service
- ✅ Comprehensive documentation
- ✅ Setup scripts
- ✅ Sample data
- ✅ Configuration files
- ✅ This index file

---

## 📞 File Purposes Summary

| Purpose | Main File(s) |
|---------|--------------|
| **Start the app** | setup.bat or setup.sh |
| **Learn about it** | README.md, PROJECT_SUMMARY.md |
| **Get started** | GETTING_STARTED.md, QUICKSTART.md |
| **Install it** | INSTALL.md, setup scripts |
| **Test it** | SAMPLE_DATA.md |
| **Run backend** | server/server.js |
| **Run frontend** | client/src/App.js |
| **Run AI service** | ai-service/app.py |
| **Configure it** | .env files |

---

## 🎓 Learning Path

1. Start: GETTING_STARTED.md
2. Understand: PROJECT_SUMMARY.md
3. Install: setup.bat/setup.sh
4. Run: QUICKSTART.md
5. Test: SAMPLE_DATA.md
6. Learn: README.md
7. Deploy: INSTALL.md

---

*Last Updated: 2026-07-22*
*Total Files Created: 29*
*Total Lines of Code: 2420+*
