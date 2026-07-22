#!/bin/bash

# CVScan - Automated Setup and Run Script for macOS/Linux
# This script downloads latest code, installs dependencies, and starts all servers

echo ""
echo "========================================"
echo "   CVScan - Resume Validator & Scorer"
echo "========================================"
echo ""

# Pull latest code from GitHub
echo "[1/4] Pulling latest code from GitHub..."
git pull origin main
if [ $? -ne 0 ]; then
    echo "Warning: Could not pull from GitHub. Continuing with local code..."
fi

echo ""
echo "[2/4] Installing dependencies..."

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
echo "[3/4] Starting servers..."
echo ""

# Check if we're on macOS or Linux
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
    
    echo "[4/4] Opening browser..."
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
    
    echo "[4/4] Opening browser..."
    sleep 2
    xdg-open "http://localhost:3001" || firefox "http://localhost:3001" || chromium "http://localhost:3001"
fi

echo ""
echo "========================================"
echo "   CVScan is ready to use!"
echo "========================================"
echo ""
echo "Services:"
echo "   - Frontend:   http://localhost:3001"
echo "   - Backend:    http://localhost:5000"
echo "   - AI Service: http://localhost:5001"
echo ""
echo "Tips:"
echo "   - Check each terminal window for logs"
echo "   - Press Ctrl+C in any terminal to stop that service"
echo "   - Close all terminal windows to stop the application"
echo ""
