# How to Run CVScan

This guide covers all methods to start the CVScan application.

## ✅ Prerequisites

Before running the installation scripts, ensure you have these three tools installed on your computer:

### 1. **Git** 📦
- **Download:** https://git-scm.com/
- **Verify:** `git --version`

### 2. **Node.js** ⚙️
- **Download:** https://nodejs.org/ (LTS recommended)
- **Verify:** `node --version` and `npm --version`

### 3. **Python 3** 🐍
- **Download:** https://python.org/ (3.8 or higher)
- **Verify:** `python --version` or `python3 --version`

**Not sure if you have them?** Run this to check:
```powershell
git --version
node --version
npm --version
python --version
```

---

## 🚀 First-Time Installation (Complete Setup)

### Windows
Download and run the installation script:
```powershell
.\windows_install.bat
```

This script will:
1. ✅ Clone the repository from GitHub
2. ✅ Install all dependencies automatically
3. ✅ Start all 3 services
4. ✅ Open the browser to http://localhost:3001

**Requirements:** Git, Node.js, and Python must be installed on your system.

### macOS/Linux
Download and run the installation script:
```bash
chmod +x macos_install.sh
./macos_install.sh
```

This script will:
1. ✅ Clone the repository from GitHub
2. ✅ Install all dependencies automatically
3. ✅ Start all 3 services
4. ✅ Open the browser to http://localhost:3001

**Requirements:** Git, Node.js, and Python 3 must be installed on your system.

---

## ⚡ Quick Start (After Installation)

If you already have the repository cloned and dependencies installed, use these commands:

### Windows
```powershell
cd cvscan
.\run.bat
```

### macOS/Linux
```bash
cd cvscan
./run.sh
```

That's it! The script will:
1. ✅ Pull latest code from GitHub
2. ✅ Start all 3 servers
3. ✅ Open the browser automatically

---

## 🖥️ Manual Setup (Alternative)

### Prerequisites
- **Node.js** v16+ (https://nodejs.org)
- **Python** 3.8+ (https://python.org)
- **Git** (https://git-scm.com)

### Step 1: Clone the Repository
```bash
git clone https://github.com/tkytkqc6t/cvscan.git
cd cvscan
```

### Step 2: Install Dependencies

**Backend (Node.js/Express):**
```powershell
cd server
npm install
cd ..
```

**Frontend (React):**
```powershell
cd client
npm install
cd ..
```

**AI Service (Python/Flask):**
```powershell
cd ai-service
python -m pip install flask flask-cors nltk python-dotenv
cd ..
```

### Step 3: Start All Services

Open 3 separate terminal windows and run each command:

**Terminal 1 - AI Service (Port 5001):**
```powershell
cd ai-service
python app.py
```

**Terminal 2 - Backend API (Port 5000):**
```powershell
cd server
npm start
```

**Terminal 3 - Frontend (Port 3001):**
```powershell
cd client
npm start
```

### Step 4: Open Browser
Navigate to: **http://localhost:3001**

---

## 🐳 Docker Setup (Optional)

If you have Docker installed:

```bash
docker-compose up
```

Then open: **http://localhost:3000**

---

## 🧪 Testing the Application

### Sample Data
Sample data is provided in `SAMPLE_DATA.md` for testing:

1. **Paste Job Description:**
   - Go to the left panel
   - Copy the sample job description from `SAMPLE_DATA.md`
   - Paste into the "Job Description Analysis" text area
   - Click "🔍 Analyze JD"

2. **Upload Resume:**
   - Click the upload area or drag-and-drop
   - Select a PDF or DOCX file
   - Use the sample resume from `SAMPLE_DATA.md` (convert to PDF if needed)

3. **View Results:**
   - Click "🧠 Compare & Rate"
   - View matching score, skills, and analysis

---

## 📋 Service Information

| Service | Port | URL | Technology |
|---------|------|-----|-----------|
| Frontend | 3001 | http://localhost:3001 | React 18 |
| Backend | 5000 | http://localhost:5000 | Node.js/Express |
| AI Service | 5001 | http://localhost:5001 | Python/Flask |

---

## 🔧 Troubleshooting

### Port Already in Use
If a port is already in use, kill the process:

**Windows:**
```powershell
# Find and kill process on port 5000 (example)
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**macOS/Linux:**
```bash
lsof -ti :5000 | xargs kill -9
```

### Python Module Not Found
```bash
# Reinstall Python dependencies
cd ai-service
python -m pip install --upgrade pip
python -m pip install flask flask-cors nltk python-dotenv
```

### npm Dependencies Issue
```bash
# Clear npm cache and reinstall
npm cache clean --force
npm install
```

### Browser Not Opening Automatically
Manually open: **http://localhost:3001**

---

## 📚 Additional Resources

- [START_HERE.md](START_HERE.md) - Project overview
- [README.md](README.md) - Full documentation
- [SAMPLE_DATA.md](SAMPLE_DATA.md) - Test data
- [QUICKSTART.md](QUICKSTART.md) - 5-minute setup guide

### Setup Scripts
- **windows_install.bat** - First-time installation for Windows
- **macos_install.sh** - First-time installation for macOS/Linux
- **run.bat** - Quick start for Windows (after installation)
- **run.sh** - Quick start for macOS/Linux (after installation)

---

## ✅ Verification Checklist

After running the application, verify all services are working:

- [ ] Browser opened to http://localhost:3001
- [ ] Frontend loads with purple gradient UI
- [ ] Can paste job description and click "Analyze JD"
- [ ] Skills are extracted and displayed
- [ ] Can upload a resume (PDF/DOCX)
- [ ] Can click "Compare & Rate" and see results
- [ ] Match score is calculated and displayed

---

## 🚀 You're All Set!

CVScan is now ready to use. Start analyzing resumes! 

For support or issues, check the documentation files or the GitHub repository.
