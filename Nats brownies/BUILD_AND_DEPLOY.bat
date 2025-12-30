@echo off
echo ========================================
echo Nats Brownies - Build and Deploy Helper
echo ========================================
echo.

echo Step 1: Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Step 2: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Step 3: Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Build complete!
echo ========================================
echo.
echo The 'dist' folder contains your production files.
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Sign up/Login
echo 3. Click "Add New Project"
echo 4. Upload the 'dist' folder or connect GitHub
echo 5. Deploy!
echo.
echo Or see STEP_BY_STEP_DEPLOY.md for detailed instructions.
echo.
pause

