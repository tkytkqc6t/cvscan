# CVScan - Getting Started Checklist

## ✅ Pre-Requisites Check
- [ ] Node.js installed (v16+) - Check: `node -v`
- [ ] npm installed (v7+) - Check: `npm -v`
- [ ] Python installed (v3.8+) - Check: `python --version`
- [ ] Administrator access for installations

## 📦 Installation (Choose One)

### Option A: Automated Setup
- [ ] Windows users: Run `setup.bat`
- [ ] Mac/Linux users: Run `chmod +x setup.sh && ./setup.sh`
- [ ] Wait for installation to complete (5-10 minutes)

### Option B: Manual Setup
- [ ] Open terminal in project root
- [ ] Run: `cd server && npm install && cd ..`
- [ ] Run: `cd client && npm install && cd ..`
- [ ] Run: `cd ai-service && pip install -r requirements.txt && cd ..`

## 🚀 Running the Application

### Terminal 1: Backend Server
- [ ] Open a terminal/PowerShell
- [ ] Navigate to project root
- [ ] Run: `cd server && npm start`
- [ ] Verify: See "Server is running on http://localhost:5000"

### Terminal 2: Frontend Application
- [ ] Open a second terminal/PowerShell
- [ ] Navigate to project root
- [ ] Run: `cd client && npm start`
- [ ] Verify: Browser opens to http://localhost:3000

### Terminal 3: AI Service (Optional)
- [ ] Open a third terminal/PowerShell
- [ ] Navigate to project root
- [ ] Run: `cd ai-service && python app.py`
- [ ] Verify: See "Running on http://127.0.0.1:5001"

## 🎯 First Test

### Step 1: Prepare Test Data
- [ ] Copy sample job description from `SAMPLE_DATA.md`
- [ ] Copy sample resume from `SAMPLE_DATA.md`
- [ ] Save resume as PDF or DOCX file

### Step 2: Job Description Analysis
- [ ] Go to http://localhost:3000
- [ ] Paste job description in left panel
- [ ] Click "🔍 Analyze JD"
- [ ] Verify: Skills and experience appear

### Step 3: Resume Upload & Analysis
- [ ] Upload sample resume file (right panel)
- [ ] Click "🧠 Compare & Rate"
- [ ] Verify: Matching score appears (should be 80-90% for sample data)

## ✨ Verify Everything Works

### Frontend (Browser)
- [ ] Page loads without errors
- [ ] Two-column layout is visible
- [ ] Can type in job description area
- [ ] Can drag-and-drop files

### Backend (Terminal 1)
- [ ] No error messages
- [ ] Responds to API calls
- [ ] Shows request logs

### AI Service (Terminal 3)
- [ ] Starts without errors
- [ ] Ready for requests

## 🔧 Troubleshooting Quick Fixes

### Port Already in Use
- [ ] Kill process on port 5000: `netstat -ano | findstr :5000` (Windows)
- [ ] Or change PORT in `server/.env` to 5001

### Dependencies Failed to Install
- [ ] Clear npm cache: `npm cache clean --force`
- [ ] Delete `node_modules`: `rm -rf node_modules`
- [ ] Reinstall: `npm install`

### File Upload Not Working
- [ ] Verify backend is running
- [ ] Check browser console for errors (F12)
- [ ] Ensure file is PDF or DOCX

## 📚 Documentation Review

- [ ] Read `README.md` for full documentation
- [ ] Skim `QUICKSTART.md` for common tasks
- [ ] Review `INSTALL.md` for detailed setup
- [ ] Check `SAMPLE_DATA.md` for test data

## 🎓 Customization (Optional)

### Add More Skills
- [ ] Edit `server/server.js` 
- [ ] Find `const commonSkills = [...]`
- [ ] Add your skills to the array

### Change Colors/Theme
- [ ] Edit `client/src/index.css`
- [ ] Modify gradient colors
- [ ] Update color variables

### Adjust Matching Thresholds
- [ ] Edit `server/server.js`
- [ ] Find `calculateMatchScore()` function
- [ ] Adjust algorithm logic

## 🚀 Advanced Usage

### Deploy to Production
- [ ] Build frontend: `cd client && npm run build`
- [ ] Choose hosting: Vercel, Netlify, AWS, Heroku
- [ ] Set environment variables
- [ ] Deploy

### Add Database
- [ ] Install MongoDB or PostgreSQL
- [ ] Create connection strings
- [ ] Update backend to use database
- [ ] Save user analyses

### Add Authentication
- [ ] Choose auth provider: Auth0, Firebase, JWT
- [ ] Add login/signup pages
- [ ] Protect API endpoints
- [ ] Implement token validation

## 📞 Need Help?

### If Something Doesn't Work
1. [ ] Check terminal for error messages
2. [ ] Verify all 3 services are running
3. [ ] Check browser console (F12)
4. [ ] Try refreshing browser
5. [ ] Kill all services and restart

### Common Solutions
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Restart all terminals and services
- [ ] Verify Node/Python versions are correct
- [ ] Check file permissions

## ✅ Final Checklist

- [ ] All three services running without errors
- [ ] Browser loads http://localhost:3000
- [ ] Can analyze job description
- [ ] Can upload resume
- [ ] Can view matching results
- [ ] Documentation is reviewed

## 🎉 Ready to Go!

You're all set! Now you can:
- ✅ Analyze job descriptions
- ✅ Upload resumes
- ✅ Get matching scores
- ✅ See skill analysis
- ✅ Customize as needed

## 📝 Notes

Use this space to track your setup:

**Setup Date:** ___________
**Issues Encountered:** ___________
**Notes:** ___________

---

**Great job! Your CVScan application is ready to use! 🚀**
