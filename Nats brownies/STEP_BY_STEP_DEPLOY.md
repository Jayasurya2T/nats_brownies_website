# Step-by-Step Deployment Guide

## Step 1: Verify Node.js Installation

### Check if Node.js is installed:

1. **Open a NEW PowerShell window** (close and reopen if needed)
   - Press `Win + X` → Select "Windows PowerShell" or "Terminal"

2. **Try these commands:**
   ```powershell
   node --version
   npm --version
   ```

### If it says "not recognized":

**Option A: Node.js might not be in PATH**
1. Find where Node.js is installed (usually `C:\Program Files\nodejs\`)
2. Add it to PATH:
   - Press `Win + R`, type `sysdm.cpl`, press Enter
   - Go to "Advanced" tab → "Environment Variables"
   - Under "System variables", find "Path" → Click "Edit"
   - Click "New" → Add: `C:\Program Files\nodejs\`
   - Click OK on all windows
   - **Close and reopen PowerShell**

**Option B: Reinstall Node.js**
1. Download from: https://nodejs.org/
2. Install the LTS version
3. Make sure to check "Add to PATH" during installation
4. Restart your computer

---

## Step 2: Install Project Dependencies

Once Node.js works:

1. **Open PowerShell in your project folder:**
   - Navigate to: `C:\Users\jayasurya t\OneDrive\Desktop\Nats brownies`
   - Or right-click in the folder → "Open in Terminal"

2. **Install dependencies:**
   ```powershell
   npm install
   ```
   This will take 1-2 minutes. Wait for it to finish.

---

## Step 3: Build the Project

After installation completes:

```powershell
npm run build
```

This creates a `dist` folder with production-ready files.

**You should see:**
```
✓ built in X.XXs
```

---

## Step 4: Deploy to Vercel (Easiest Method)

### Method 1: Via Vercel Website (No CLI needed)

1. **Go to:** https://vercel.com
2. **Sign up/Login** (you can use GitHub, Google, or email)
3. **Click "Add New Project"**
4. **Upload your project:**
   - Option A: If you have GitHub, connect your repo
   - Option B: Drag and drop the entire project folder
   - Option C: Use Vercel CLI (see Method 2 below)

5. **Configure (if asked):**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**
7. **Wait 1-2 minutes**
8. **Your site is live!** You'll get a URL like: `nats-brownies.vercel.app`

### Method 2: Via Vercel CLI

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Login:**
   ```powershell
   vercel login
   ```
   (This will open a browser for authentication)

3. **Deploy:**
   ```powershell
   vercel
   ```
   Follow the prompts. For production:
   ```powershell
   vercel --prod
   ```

---

## Step 5: Deploy to AWS S3 (Alternative)

### Quick Steps:

1. **Go to AWS Console:** https://console.aws.amazon.com
2. **Login** (create account if needed - free tier available)

3. **Create S3 Bucket:**
   - Go to S3 service
   - Click "Create bucket"
   - Name: `nats-brownies` (must be unique globally)
   - Uncheck "Block all public access"
   - Enable "Static website hosting"
   - Index document: `index.html`
   - Error document: `index.html`
   - Click "Create bucket"

4. **Make it Public:**
   - Go to bucket → "Permissions" tab
   - "Bucket policy" → Add:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::nats-brownies/*"
       }
     ]
   }
   ```
   (Replace `nats-brownies` with your actual bucket name)

5. **Upload Files:**
   - Go to bucket
   - Click "Upload"
   - Upload ALL files from the `dist` folder
   - Make sure to upload files, not the folder
   - Click "Upload"

6. **Get Your URL:**
   - Go to "Properties" tab
   - Scroll to "Static website hosting"
   - Copy the "Bucket website endpoint" URL
   - Your site is live!

---

## Troubleshooting

### "npm is not recognized"
- Restart PowerShell/terminal
- Check Node.js installation
- Add Node.js to PATH (see Step 1)

### "npm install" fails
- Check internet connection
- Try: `npm install --legacy-peer-deps`
- Delete `node_modules` folder and `package-lock.json`, then try again

### Build fails
- Make sure all files are in place
- Check for error messages
- Try: `npm run build -- --mode production`

### Vercel deployment fails
- Make sure `dist` folder exists (run `npm run build` first)
- Check that `vercel.json` is in the root folder
- Verify build command is `npm run build`

---

## After Deployment

✅ Your website is live!

**Next steps:**
1. Test all pages (Home, About, Admin, Cart)
2. Add real product images to `public/images/products/`
3. Update email in `src/components/About.jsx` if needed
4. Share your website URL!

---

## Quick Command Reference

```powershell
# Install dependencies
npm install

# Build for production
npm run build

# Test build locally
npm run preview

# Deploy to Vercel (if CLI installed)
vercel --prod
```

