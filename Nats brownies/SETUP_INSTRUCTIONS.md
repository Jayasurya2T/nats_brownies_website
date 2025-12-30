# Setup Instructions for Nats Brownies Website

## Step 1: Install Node.js

You need to install Node.js first to run this React application.

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard (accept defaults)
   - Make sure to check "Add to PATH" option if available

3. **Verify Installation:**
   - Open a new PowerShell or Command Prompt window
   - Run: `node --version`
   - Run: `npm --version`
   - Both should show version numbers

## Step 2: Install Project Dependencies

Once Node.js is installed:

1. **Open PowerShell or Command Prompt**
2. **Navigate to the project folder:**
   ```
   cd "C:\Users\jayasurya t\OneDrive\Desktop\Nats brownies"
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

   This will install all required packages (React, Vite, etc.)

## Step 3: Start the Development Server

After installation completes:

1. **Start the development server:**
   ```
   npm run dev
   ```

2. **Open your browser:**
   - The terminal will show a URL like: `http://localhost:5173`
   - Open this URL in your browser
   - The website should now be visible!

## Troubleshooting

### If `npm install` fails:
- Make sure Node.js is properly installed
- Try running PowerShell as Administrator
- Check your internet connection

### If the dev server doesn't start:
- Make sure you're in the correct directory
- Check that `node_modules` folder was created
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

### To stop the server:
- Press `Ctrl + C` in the terminal

## Building for Production

When you're ready to deploy:

```
npm run build
```

This creates a `dist` folder with production-ready files that can be hosted on any web server.

