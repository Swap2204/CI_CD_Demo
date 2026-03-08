# Linear Ticket: GitHub Actions CI Setup for Beginners

**Ticket ID:** BEGINNER-GHA-001  
**Priority:** High  
**Created:** 2025-03-08  
**Estimated Time:** 30-60 minutes  
**Level:** Absolute Beginner

---

## 📋 THE BIG PICTURE

You want to automate testing your code every time you save changes. GitHub Actions does this automatically.

**What will happen:**
1. Push code to GitHub
2. GitHub Actions automatically runs your tests
3. You see which tests passed/failed without doing anything

---

## ✅ CHECKLIST - Do These One By One

### Phase 1: Prepare Your Computer
- [ ] You have GitHub account created
- [ ] You know your GitHub username and password (or have 2FA set up)
- [ ] You have internet connection

### Phase 2: Get Your Code Ready
- [ ] Navigate to project folder: `cd C:\Users\owner\ci-cd-demo`
- [ ] Test your code locally runs: `npm start` (then stop it with Ctrl+C)
- [ ] Test your tests work: `npm test`

### Phase 3: Put Code on GitHub
- [ ] Step 3.1: Create the folder a "git folder"
- [ ] Step 3.2: Tell git what files to track
- [ ] Step 3.3: Save your first version
- [ ] Step 3.4: Create GitHub repository online
- [ ] Step 3.5: Connect local folder to online
- [ ] Step 3.6: Upload code to GitHub

### Phase 4: Watch GitHub Actions Run
- [ ] Step 4.1: Go to Actions tab on GitHub
- [ ] Step 4.2: See green checkmark or red X
- [ ] Step 4.3: Click to see what happened

### Phase 5: Make A Change and Test
- [ ] Step 5.1: Change something in your code
- [ ] Step 5.2: Save the change
- [ ] Step 5.3: Watch GitHub Actions run again
- [ ] Step 5.4: See your change tested automatically

---

## 👶 BABY STEPS - Follow in Order

### 🥦 BABY STEP 1: Check You Have What You Need

**What you need:**
- Folder at: `C:\Users\owner\ci-cd-demo`
- GitHub account
- Git installed
- Node.js installed

**Do this now:**
```powershell
# Check if you're in the right folder
cd C:\Users\owner\ci-cd-demo
dir

# You should see: app.js, package.json, tests folder
```

**If you don't see these files:**
You're in the wrong folder. Go find the `ci-cd-demo` folder.

---

### 🥦 BABY STEP 2: Make Your Code a "Git Folder"

**What this means:**
Git is like a magic folder that remembers all your changes.

**Do this:**
```powershell
# You should already be in the folder
git init
```

**What you see:**
`Initialized empty Git repository` (this is good!)

**What this does:**
Creates a hidden `.git` folder that remembers everything.

---

### 🥦 BABY STEP 3: Tell Git What Files to Track

**What this means:**
Git doesn't know which files to watch. You tell it.

**Do this:**
```powershell
git add .
```

**What this does:**
- Takes a snapshot of ALL your files
- Prepares them to be saved

**What "git add" means:**
Think of it like putting papers in a folder to photocopy them.

---

### 🥦 BABY STEP 4: Save Your First Version

**What this means:**
Now save the snapshot with a note.

**Do this:**
```powershell
git commit -m "initial commit"
```

**What you see:**
`1 file changed, X insertions(+)` (this is good!)

**What this does:**
- Saves all your files
- Labels it "initial commit"
- You can go back to this version anytime

---

### 🥦 BABY STEP 5: Create GitHub Repository

**What this means:**
Make a new empty folder on GitHub (online).

**Do this:**

1. Open your web browser
2. Go to **github.com**
3. Click the **+** (top right)
4. Click **New repository**
5. Fill in:
   - Repository name: `ci-cd-demo`
   - Description: `My first CI/CD project`
   - Make it **Public** (easier for learning)
   - **Do NOT** check "Add README" (you already have code!)
6. Click **Create repository**
7. You see a page with instructions

**Don't copy anything yet! Do Step 6 first.**

---

### 🥦 BABY STEP 6: Tell Your Computer Where GitHub Is

**What this means:**
Connect your local git folder to GitHub.

**Do this:**

You're still on the GitHub "create repository" page. You see options:
- **HTTPS**: `https://github.com/YOUR-USERNAME/ci-cd-demo.git`
- **SSH**: `git@github.com:YOUR-USERNAME/ci-cd-demo.git`

**Choose HTTPS** (easier for beginners)

**Do this in your terminal:**
```powershell
git remote add origin https://github.com/YOUR-USERNAME/ci-cd-demo.git
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

**Example:**
If your username is `johnsmith`, use:
```
git remote add origin https://github.com/johnsmith/ci-cd-demo.git
```

---

### 🥦 BABY STEP 7: Upload Your Code to GitHub

**What this means:**
Send your code from your computer to GitHub.

**Do this:**
```powershell
git branch -M main
git push -u origin main
```

**What happens:**
- GitHub might ask for your username/password
- Enter your GitHub credentials
- Enter an "access token" if something changes (ask if this happens)
- You see: `X files pushed`

**What this does:**
Your code is now visible on GitHub online!

---

### 🥦 BABY STEP 8: Verify GitHub Actions Is Working

**What this means:**
Check if GitHub found your CI configuration.

**Do this:**

1. Go to GitHub.com
2. Click on your `ci-cd-demo` repository
3. Click the **Actions** tab (top of page)
4. You should see workflows listed

**If you see workflows:**
Great! GitHub found the `.github/workflows/ci.yml` file automatically!

**If you don't see workflows:**
The file isn't uploaded. Go back to step 3-7.

---

### 🥦 BABY STEP 9: Watch Your First CI Run

**All automatically - you just watch!**

**Look in the "Actions" tab:**
- You see a workflow running
- Wait a few seconds (about 2-3 minutes)
- Green checkmark means success ✅
- Red X means something failed ❌

**Open the workflow:**
Click the workflow to see details.

**What it's doing:**
- Checking out your code
- Installing Node.js
- Installing dependencies
- Running tests
- Building Docker image
- Testing the Docker image

---

### 🥦 BABY STEP 10: Make a Change and Watch It Work

**This proves CI is working!**

**Do this:**
```powershell
# In VS Code, open app.js
# Change one console.log line (add " with CI!")
# Save the file

# Now push the change
git add .
git commit -m "test CI automation"
git push
```

**Watch on GitHub:**
1. Go to Actions tab
2. New workflow started automatically
3. Wait for it to finish
4. Check if it passed

**What you just did:**
Changed code → Pushed → GitHub Actions tested it → You didn't run tests manually

This is **Continuous Integration**!

---

## 🎯 YOU DID IT Checklist

- [ ] Code is on GitHub
- [ ] GitHub Actions finds workflows
- [ ] Workflow runs automatically
- [ ] You can see test results
- [ ] You made a change and CI tested it automatically

---

## 🔍 TROUBLESHOOTING If Something Goes Wrong

**Problem 1: "git: command not found"**
- Solution: Install Git from git-scm.com

**Problem 2: "permission denied" or "authentication failed"**
- Solution: GitHub asks for "Personal Access Token"
- Steps:
  1. Go to github.com → Settings → Developer settings → Personal access tokens
  2. Generate new token (classic)
  3. Give it a name, check `repo` permissions
  4. Copy the token
  5. When push asks for password, paste the token
  6. The screen won't show what you're typing (this is normal!)

**Problem 3: "fatal: repository already exists"**
- Solution: Run: `git remote remove origin`
- Then do step 6 again

**Problem 4: GitHub Actions doesn't run**
- Solution: Check the file structure folder is `.github/workflows` (not `github/workflows`)
- Solution: Make sure `ci.yml` exists in `C:\Users\owner\ci-cd-demo\.github\workflows\`

**Problem 5: Workflow says "Node.js not found"**
- Solution: This is okay! GitHub Actions might need different Node.js version
- GitHub will try all versions in your list

**Problem 6: Workflow shows red X**
- Click the workflow See which step failed
- Usually it's a test failure
- Run `npm test` locally to see errors
- Fix the errors and push again

---

## 📚 What You Just Learned

**Git Basics:**
- `git init` - Make folder trackable
- `git add` - Stage files
- `git commit` - Save snapshot
- `git push` - Upload to GitHub

**GitHub Actions:**
- Automatically runs when code is pushed
- Tests your code without you doing anything
- Shows you which tests passed/failed
- Can do many automated tasks

**CI (Continuous Integration):**
- Code → Push → Automatic Testing → Results

---

## 🚀 Next Steps (After You Finish This Ticket)

1. Look at the test results in GitHub Actions
2. Intentionally break a test → See CI catches it
3. Add your project README to GitHub
4. Share with friends!

---

## 📞 Contact

If you're stuck:
- Project folder: `C:\Users\owner\ci-cd-demo`
- GitHub repository: Check your GitHub profile
- Questions? Check the README.md in the project

---

## ✍️ Sign-Off

### Completed By:
- [ ] Read all baby steps
- [ ] Followed checklist in order
- [ ] Code is now on GitHub
- [ ] GitHub Actions runs automatically
- [ ] Made a change and saw CI test it

**Date:** ________________  
**Your Name:** ________________

---

**Remember:** Every expert started as a beginner. You're learning real DevOps skills! 🎉

---

## 🎓 Quick Reference (Print This Out)

### Git Commands
```
git init                  # Start tracking
git add .                 # Stage files
git commit -m "message"   # Save
git push                  # Upload
```

### GitHub Actions Basics
```
Push code → GitHub Actions runs → Check results
```

### Where to Test Locally
```
npm start     # Run app
npm test      # Run tests
```

### Where to See CI Results
```
GitHub.com → Repository → Actions tab
```

GREEN = ✅ All good  
RED = ❌ Something broke (click to see what)

---

**YOU GOT THIS!** 💪