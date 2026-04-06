# PhishGuard Website

This repository contains the source code for the official landing page of the **PhishGuard** browser extension. 
It features a professionally designed minimalist UI, a cyber-security aesthetic, and an interactive Matrix-style raining code canvas background.

## 🚀 Live Preview (Coming Soon)
Once configured via GitHub Pages, the site will be accessible without any hosting fees.

## 📦 Extension Details
The website directs users to download the extension files directly from our primary repository:
[PhishGuard Extension Repository](https://github.com/Girinadh007/PhishGuard)

## 🌐 Deploying to GitHub Pages (The Easy Path)

To host this website for free and get a live link using GitHub, follow this path to create a separate repository for your website. This is the cleanest method because it keeps your website code isolated from your extension code.

### Step 1: Create a New Repository
1. Go to your GitHub profile and click the **New** repository button.
2. Name the repository something clear, like `PhishGuard-Website`.
3. Leave it Public, but **do not** initialize it with a README (leave the "Add a README file" box unchecked).
4. Click **Create repository**.

### Step 2: Push These Files to GitHub
Open your terminal (Command Prompt or PowerShell) inside this exact folder (`Website-Phishguard`) on your computer. Run these commands one by one:

```bash
git init
git add .
git commit -m "Initial website commit"
git branch -M main
git remote add origin https://github.com/Girinadh007/PhishGuard-Website.git
git push -u origin main
```
*(Make sure to replace the `PhishGuard-Website` URL with the actual link GitHub gives you if you named it differently!)*

### Step 3: Enable GitHub Pages
1. Go to your newly created GitHub repository (`PhishGuard-Website`).
2. Click on the **Settings** tab near the top right.
3. On the left sidebar, scroll down and click **Pages**.
4. Under "Build and deployment" > "Source", select **Deploy from a branch**.
5. Under the "Branch" section, select the **`main`** branch, and `/ (root)` folder.
6. Click **Save**.

That's it! Wait about 1-2 minutes, and your site will be live on the internet! GitHub will provide you with the live URL right there in the Settings > Pages menu.

## 🛠️ Built With
* HTML5
* CSS3 (Vanilla)
* JavaScript (Canvas API)
