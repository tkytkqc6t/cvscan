#!/bin/bash

# CVScan Quick Start Script

echo "🚀 Starting CVScan Application..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js v16 or higher.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js found: $(node -v)${NC}"

# Check if Python is installed
if ! command -v python &> /dev/null; then
    echo -e "${RED}❌ Python is not installed. Please install Python v3.8 or higher.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Python found: $(python --version)${NC}"
echo ""

# Install backend dependencies
echo -e "${YELLOW}Installing backend dependencies...${NC}"
cd server
npm install
cd ..
echo -e "${GREEN}✓ Backend dependencies installed${NC}"
echo ""

# Install frontend dependencies
echo -e "${YELLOW}Installing frontend dependencies...${NC}"
cd client
npm install
cd ..
echo -e "${GREEN}✓ Frontend dependencies installed${NC}"
echo ""

# Install AI service dependencies
echo -e "${YELLOW}Installing AI service dependencies...${NC}"
cd ai-service
pip install -r requirements.txt
cd ..
echo -e "${GREEN}✓ AI service dependencies installed${NC}"
echo ""

echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo -e "${YELLOW}To start the application:${NC}"
echo ""
echo "Terminal 1 - Backend:"
echo "  cd server && npm start"
echo ""
echo "Terminal 2 - Frontend:"
echo "  cd client && npm start"
echo ""
echo "Terminal 3 (Optional) - AI Service:"
echo "  cd ai-service && python app.py"
echo ""
echo -e "${GREEN}Then open http://localhost:3000 in your browser${NC}"
