@echo off
REM CVScan - First-Time Installation Script for Windows
REM This script clones the repository and sets up the entire application

echo.
echo ========================================
echo   CVScan - Installation Script
echo ========================================
echo.
echo This script will:
echo   1. Clone the repository from GitHub
echo   2. Install all dependencies
echo   3. Start all services
echo   4. Open the application in your browser
echo.

REM Check if Git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not in PATH
    echo Please install Python from https://python.org/
    pause
    exit /b 1
)

echo [1/3] Cloning repository from GitHub...
echo.

REM Clone the repository
git clone https://github.com/tkytkqc6t/cvscan.git
if %errorlevel% neq 0 (
    echo Error: Failed to clone repository
    echo Make sure you have internet connection and GitHub is accessible
    pause
    exit /b 1
)

cd cvscan

echo.
echo [2/3] Installing dependencies...
echo.

REM Install backend dependencies
echo Installing backend dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..

REM Install frontend dependencies
echo Installing frontend dependencies...
cd client
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install frontend dependencies
    pause
    exit /b 1
)
cd ..

REM Install Python dependencies
echo Installing Python dependencies...
cd ai-service
python -m pip install -q flask flask-cors nltk python-dotenv
if %errorlevel% neq 0 (
    echo Error: Failed to install Python dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo [3/3] Starting services...
echo.
echo Starting AI Service (Flask) on http://localhost:5001...
start cmd /k "cd ai-service && python app.py"
timeout /t 3 /nobreak

echo Starting Backend API (Express) on http://localhost:5000...
start cmd /k "cd server && npm start"
timeout /t 3 /nobreak

echo Starting Frontend (React) on http://localhost:3001...
start cmd /k "cd client && npm start"
timeout /t 5 /nobreak

echo.
echo Opening application in browser...
timeout /t 2 /nobreak

REM Open browser
start http://localhost:3001

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo Application Details:
echo   - Cloned to: %cd%
echo   - Frontend:   http://localhost:3001
echo   - Backend:    http://localhost:5000
echo   - AI Service: http://localhost:5001
echo.
echo Next time you want to run the app:
echo   1. Open PowerShell
echo   2. Navigate to the cvscan directory
echo   3. Run: .\run.bat
echo.
echo Tips:
echo   - Check each terminal window for logs
echo   - Press Ctrl+C in any terminal to stop that service
echo   - To update the code: git pull in the cvscan directory
echo.
pause
