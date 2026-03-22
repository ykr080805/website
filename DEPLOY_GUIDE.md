# 🚀 Deployment Guide (Free & Easy)

Your website is fully optimized and configured to be deployed as a **Single Web Service** on Render.com for free! I have combined the React JS frontend into the Node.js backend so you only have to manage one server.

### Step 1: Upload to GitHub
1. Create a GitHub account if you don't have one and click **New Repository**.
2. Name it `gift-website` and keep it Private if you prefer.
3. Open your terminal in this exact folder (`C:\Users\koush\OneDrive\Desktop\website`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gift-website.git
   git push -u origin main
   ```

### Step 2: Deploy to Render.com
1. Go to [Render.com](https://render.com) and sign up with GitHub.
2. Click **New +** and select **Web Service**.
3. Choose **"Build and deploy from a Git repository"** and select your `gift-website` repository.
4. Render will automatically detect your settings! Just ensure these fields match:
   - **Environment:** `Node`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
5. Click **Create Web Service**.

That's it! Render will automatically install everything, build your cinematic frontend, start your Express backend, and provide you with a live, public URL (like `https://gift-website-a1b2.onrender.com`) that you can send directly to manu!
