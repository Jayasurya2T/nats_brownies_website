# Deployment Guide - Nats Brownies Website

This guide covers deploying your React website to **Vercel** (recommended) or **AWS S3**.

---

## Option 1: Deploy to Vercel (Easiest & Recommended)

Vercel is free and perfect for React apps. It automatically handles builds and provides a free domain.

### Prerequisites
- Node.js installed (for building)
- A GitHub account (recommended) or Vercel account

### Method A: Deploy via Vercel Website (Easiest)

1. **Build your project locally first:**
   ```bash
   npm install
   npm run build
   ```
   This creates a `dist` folder with production files.

2. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up/Login (you can use GitHub to sign in)

3. **Deploy:**
   - Click "Add New Project"
   - If your code is on GitHub: Import your repository
   - If not: Drag and drop the `dist` folder
   - Or use Vercel CLI (see Method B below)

4. **Configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live at: `your-project-name.vercel.app`

### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts. For production:
   ```bash
   vercel --prod
   ```

### Vercel Features:
- ✅ Free SSL certificate
- ✅ Free custom domain
- ✅ Automatic deployments from GitHub
- ✅ Fast CDN
- ✅ Free tier is generous

---

## Option 2: Deploy to AWS S3 + CloudFront

AWS S3 can host static websites. For better performance, add CloudFront (CDN).

### Prerequisites
- AWS account
- AWS CLI installed (optional but recommended)

### Step 1: Build Your Project

```bash
npm install
npm run build
```

This creates a `dist` folder.

### Step 2: Create S3 Bucket

1. **Go to AWS Console:**
   - Login to: https://console.aws.amazon.com
   - Navigate to S3 service

2. **Create Bucket:**
   - Click "Create bucket"
   - Bucket name: `nats-brownies` (must be globally unique)
   - Region: Choose closest to your users
   - **Uncheck** "Block all public access" (we need public access)
   - Acknowledge the warning
   - Click "Create bucket"

3. **Enable Static Website Hosting:**
   - Click on your bucket
   - Go to "Properties" tab
   - Scroll to "Static website hosting"
   - Click "Edit"
   - Enable it
   - Index document: `index.html`
   - Error document: `index.html` (for React Router)
   - Click "Save changes"

4. **Set Bucket Policy (Make it Public):**
   - Go to "Permissions" tab
   - Click "Bucket policy"
   - Add this policy (replace `YOUR-BUCKET-NAME`):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
       }
     ]
   }
   ```
   - Click "Save changes"

### Step 3: Upload Files

**Option A: Via AWS Console**
1. Go to your bucket
2. Click "Upload"
3. Upload all files from the `dist` folder
4. Make sure to upload files, not the folder itself
5. Click "Upload"

**Option B: Via AWS CLI**
```bash
# Install AWS CLI first: https://aws.amazon.com/cli/
aws configure  # Enter your AWS credentials

# Upload files
aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete
```

### Step 4: Access Your Website

- Go to "Properties" → "Static website hosting"
- Copy the "Bucket website endpoint" URL
- Your site is live at that URL!

**Note:** The URL will look like: `http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com`

### Step 5: (Optional) Add CloudFront CDN

For better performance and custom domain:

1. Go to CloudFront service in AWS Console
2. Click "Create Distribution"
3. Origin Domain: Select your S3 bucket
4. Viewer Protocol Policy: Redirect HTTP to HTTPS
5. Default Root Object: `index.html`
6. Click "Create Distribution"
7. Wait 10-15 minutes for deployment
8. Your site will be at the CloudFront URL

### Step 6: (Optional) Custom Domain

1. In CloudFront, add your domain
2. Update DNS records as instructed
3. SSL certificate is automatically provided

---

## Important Notes for Both Platforms

### React Router Configuration

Since we're using React Router, you need to handle client-side routing:

**For Vercel:**
- Already handled automatically! Vercel detects React Router.

**For S3:**
- The error document should be `index.html` (already set above)
- For CloudFront: Add error page rule:
  - HTTP Error Code: 403, 404
  - Response Page Path: `/index.html`
  - HTTP Response Code: 200

### Environment Variables

If you need to change the email or other settings later:
- **Vercel:** Add in project settings → Environment Variables
- **S3:** Update the code and rebuild

### Updating Your Site

**Vercel:**
- Push to GitHub (if connected) → Auto-deploys
- Or run `vercel --prod` again

**S3:**
- Rebuild: `npm run build`
- Re-upload: `aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete`

---

## Cost Comparison

### Vercel
- **Free tier:** Generous for personal/small projects
- **Paid:** Starts at $20/month (usually not needed)

### AWS S3
- **S3 Storage:** ~$0.023 per GB/month (very cheap)
- **Data Transfer:** First 1GB free, then ~$0.09/GB
- **CloudFront:** First 1TB free, then ~$0.085/GB
- **Total:** Usually under $1/month for small sites

---

## Recommendation

**For beginners:** Use **Vercel** - it's simpler and free.

**For AWS experience or specific requirements:** Use **AWS S3 + CloudFront**.

Both work perfectly for this React app!

