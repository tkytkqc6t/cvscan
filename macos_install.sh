#!/bin/bash

# CVScan - First-Time Installation Script for macOS/Linux
# This script clones the repository and sets up the entire application

echo ""
echo "========================================"
echo "   CVScan - Installation Script"
echo "========================================"
echo ""
echo "This script will:"
echo "   1. Clone the repository from GitHub"
echo "   2. Install all dependencies"
echo "   3. Start all services"
echo "   4. Open the application in your browser"
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "Error: Git is not installed"
    echo "Please install Git:"
    echo "  macOS: brew install git"
    echo "  Ubuntu/Debian: sudo apt-get install git"
    echo "  Fedora: sudo dnf install git"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is not installed"
    echo "Please install Python 3:"
    echo "  macOS: brew install python3"
    echo "  Ubuntu/Debian: sudo apt-get install python3"
    echo "  Fedora: sudo dnf install python3"
    exit 1
fi

echo "[1/3] Cloning repository from GitHub..."
echo ""

# Clone the repository
git clone https://github.com/tkytkqc6t/cvscan.git
if [ $? -ne 0 ]; then
    echo "Error: Failed to clone repository"
    echo "Make sure you have internet connection and GitHub is accessible"
    exit 1
fi

cd cvscan

echo ""
echo "[2/3] Installing dependencies..."
echo ""

# Install backend dependencies
echo "Installing backend dependencies..."
cd server
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install backend dependencies"
    exit 1
fi
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd client
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install frontend dependencies"
    exit 1
fi
cd ..

# Install Python dependencies
echo "Installing Python dependencies..."
cd ai-service
python3 -m pip install -q flask flask-cors nltk python-dotenv
if [ $? -ne 0 ]; then
    echo "Error: Failed to install Python dependencies"
    exit 1
fi
cd ..

echo ""
echo "[3/3] Starting services..."
echo ""

# Determine OS type
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "Starting AI Service (Flask) on http://localhost:5001..."
    open -a Terminal "cd '$(pwd)/ai-service' && python3 app.py"
    sleep 3
    
    echo "Starting Backend API (Express) on http://localhost:5000..."
    open -a Terminal "cd '$(pwd)/server' && npm start"
    sleep 3
    
    echo "Starting Frontend (React) on http://localhost:3001..."
    open -a Terminal "cd '$(pwd)/client' && npm start"
    sleep 5
    
    echo "Opening application in browser..."
    sleep 2
    open "http://localhost:3001"
else
    # Linux
    echo "Starting AI Service (Flask) on http://localhost:5001..."
    gnome-terminal -- bash -c "cd '$(pwd)/ai-service' && python3 app.py; exec bash" &
    sleep 3
    
    echo "Starting Backend API (Express) on http://localhost:5000..."
    gnome-terminal -- bash -c "cd '$(pwd)/server' && npm start; exec bash" &
    sleep 3
    
    echo "Starting Frontend (React) on http://localhost:3001..."
    gnome-terminal -- bash -c "cd '$(pwd)/client' && npm start; exec bash" &
    sleep 5
    
    echo "Opening application in browser..."
    sleep 2
    xdg-open "http://localhost:3001" || firefox "http://localhost:3001" || chromium "http://localhost:3001" &
fi

echo ""
echo "========================================"
echo "   Installation Complete!"
echo "========================================"
echo ""
echo "Application Details:"
echo "   - Cloned to: $(pwd)"
echo "   - Frontend:   http://localhost:3001"
echo "   - Backend:    http://localhost:5000"
echo "   - AI Service: http://localhost:5001"
echo ""
echo "Next time you want to run the app:"
echo "   1. Open Terminal"
echo "   2. Navigate to the cvscan directory: cd cvscan"
echo "   3. Run: ./run.sh"
echo ""
echo "Tips:"
echo "   - Check each terminal window for logs"
echo "   - Press Ctrl+C in any terminal to stop that service"
echo "   - To update the code: git pull in the cvscan directory"
echo ""
