# Quick Deployment Reference

## Build for Production

Before deploying anywhere, always build first:

```bash
npm install
npm run build
```

This creates a `dist` folder with all production files.

---

## Vercel (Recommended - Easiest)

### Option 1: Via Website (No CLI needed)
1. Go to https://vercel.com
2. Sign up/Login
3. Click "Add New Project"
4. Drag & drop the `dist` folder OR connect GitHub
5. Framework: Vite
6. Deploy!

### Option 2: Via CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Result:** Your site at `your-project.vercel.app`

---

## AWS S3

### Quick Steps:
1. Create S3 bucket (make it public)
2. Enable "Static website hosting"
3. Upload `dist` folder contents
4. Access via bucket website endpoint

### Via AWS CLI:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

**See `DEPLOYMENT_GUIDE.md` for detailed instructions.**

---

## Important: React Router

Both platforms need to handle client-side routing:

- **Vercel:** Handled automatically ✅
- **S3:** Set error document to `index.html` ✅
- **CloudFront:** Add error page rule (403/404 → `/index.html`)

---

## After Deployment

Your site will be live! Update:
- Product images in `public/images/products/`
- Email address in `src/components/About.jsx` and `src/utils/orderFormatter.js`
- Rebuild and redeploy

