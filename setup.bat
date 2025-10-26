@echo off
REM Tithi.xyz Frontend Setup Script for Windows
REM ETHOnline 2025 Hackathon Submission

echo 🌕 Setting up Tithi.xyz Frontend...
echo ==================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ npm detected

REM Install dependencies
echo.
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Start development server
echo.
echo 🚀 Starting development server...
echo ==================================
echo 🌐 Open http://localhost:5173 in your browser
echo 🛑 Press Ctrl+C to stop the server
echo.

npm run dev
