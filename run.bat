@echo off
REM CVScan - Automated Setup and Run Script for Windows
REM This script downloads latest code, installs dependencies, and starts all servers

echo.
echo ========================================
echo   CVScan - Resume Validator Scorer
echo ========================================
echo.

REM Pull latest code from GitHub
echo [1/4] Pulling latest code from GitHub...
git pull origin main
if %errorlevel% neq 0 (
    echo Warning: Could not pull from GitHub. Continuing with local code...
)

echo.
echo [2/4] Installing dependencies...

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
echo [3/4] Starting servers...
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
echo [4/4] Opening browser...
echo.
timeout /t 2 /nobreak

REM Open browser
start http://localhost:3001

echo.
echo ========================================
echo   CVScan is ready to use!
echo ========================================
echo.
echo Services:
echo   - Frontend:   http://localhost:3001
echo   - Backend:    http://localhost:5000
echo   - AI Service: http://localhost:5001
echo.
echo Tips:
echo   - Check each terminal window for logs
echo   - Press Ctrl+C in any terminal to stop that service
echo   - Close all terminal windows to stop the application
echo.
pause
