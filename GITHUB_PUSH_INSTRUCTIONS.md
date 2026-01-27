# GitHub Push Instructions

## ✅ Git Repository Ready!

Your project has been initialized with git and all files are committed.

## 🚀 Push to GitHub (Choose One Method)

### Method 1: If You Already Have a GitHub Repository

If you've already created a repository on GitHub:

```bash
# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/ledia-ceta-art.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Method 2: Create New GitHub Repository First

1. **Go to GitHub**: https://github.com/new

2. **Create repository**:
   - Repository name: `ledia-ceta-art` (or any name you prefer)
   - Description: "Professional artist portfolio for Ledia Çeta"
   - Choose: Public or Private
   - **DO NOT** initialize with README (we already have one)
   - Click "Create repository"

3. **Copy the repository URL** (looks like: `https://github.com/YOUR_USERNAME/ledia-ceta-art.git`)

4. **Run these commands**:
   ```bash
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/ledia-ceta-art.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

## 🌐 Deploy to Vercel

Once pushed to GitHub:

1. **Go to Vercel**: https://vercel.com/new

2. **Import your GitHub repository**:
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**:
   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**: Click "Deploy"

5. **Update Sanity CORS**:
   - Go to https://manage.sanity.io
   - Select your project → API → CORS Origins
   - Add your Vercel URL (e.g., `https://your-site.vercel.app`)

## ✨ Your Site Will Be Live!

After deployment, your site will be available at:
- **Production**: `https://your-project.vercel.app`
- **Studio**: `https://your-project.vercel.app/studio`

## 🔄 Future Updates

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically redeploy on every push to main!

---

**Need help?** Check the README.md or SETUP_GUIDE.md for more details.
