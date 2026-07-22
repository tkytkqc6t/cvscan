@echo off
REM CVScan Quick Start Script for Windows

echo.
echo Checking requirements...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed. Please install Node.js v16 or higher.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo [OK] Node.js found: %NODE_VERSION%

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Python is not installed. Please install Python v3.8 or higher.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('python --version') do set PYTHON_VERSION=%%i
echo [OK] Python found: %PYTHON_VERSION%

echo.
echo Installing backend dependencies...
cd server
call npm install
cd ..
echo [OK] Backend dependencies installed
echo.

echo Installing frontend dependencies...
cd client
call npm install
cd ..
echo [OK] Frontend dependencies installed
echo.

echo Installing AI service dependencies...
cd ai-service
python -m pip install -r requirements.txt
cd ..
echo [OK] AI service dependencies installed
echo.

echo Setup complete!
echo.
echo To start the application:
echo.
echo Terminal 1 - Backend:
echo   cd server && npm start
echo.
echo Terminal 2 - Frontend:
echo   cd client && npm start
echo.
echo Terminal 3 (Optional) - AI Service:
echo   cd ai-service && python app.py
echo.
echo Then open http://localhost:3000 in your browser
echo.
pause
