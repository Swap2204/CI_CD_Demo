# LEARN GITHUB ACTIONS — Build Your Own CI Pipeline

**Repo:** `Swap2204/CI_CD_Demo`  
**Your goal:** Create a GitHub Actions CI pipeline from scratch and watch it run.

---

## 📋 YOUR TICKET — Build This CI Pipeline

You will create `.github/workflows/ci.yml` yourself, step by step.

**What this CI pipeline will do:**
- Run automatically when you push code
- Install Node.js
- Install dependencies
- Run your Jest tests
- Show you if tests pass or fail

---

## ✅ HIGHER-LEVEL CHECKLIST

Complete these in order:

- [ ] You understand what a CI pipeline does
- [ ] You created the correct folder structure
- [ ] You wrote the workflow file
- [ ] You pushed it to GitHub
- [ ] You saw GitHub Actions run automatically
- [ ] You made a change and watched CI run again

---

## 👶 BABY STEP 1 — Understand What You're Building

**What is a CI pipeline?**

A CI (Continuous Integration) pipeline is a robot that runs your tests automatically every time you save work. You push once, and the pipeline:
1. Downloads your code
2. Sets up the environment
3. Runs your tests
4. Tells you "passed ✅" or "failed ❌"

**Where does it live on GitHub?**

GitHub looks for workflow files here:
```
.github/workflows/
```

If that folder has a YAML file ending in `.yml` or `.yaml`, GitHub Actions finds it and runs it automatically.

**Key word:** YAML - a simple file format that defines steps.

---

## 👶 BABY STEP 2 — Create the Folder Structure

**Your folder location:**
```
C:\Users\owner\Documents\CI_CD_Demo
```

**Open PowerShell and navigate there:**
```powershell
cd C:\Users\owner\Documents\CI_CD_Demo
```

**What to do:**
```powershell
# Create the folder .github
New-Item -ItemType Directory -Path ".github" -Force

# Create the subfolder workflows
New-Item -ItemType Directory -Path ".github\workflows" -Force

# Verify it's there
ls
```

**What you should see:**
- `.github/` folder you just created

---

## 👶 BABY STEP 3 — Create an Empty Workflow File

**What to do:**

Use VS Code to create a file at:

```
.github/workflows/ci.yml
```

**Or use PowerShell:**
```powershell
New-Item -ItemType File -Path ".github/workflows/ci.yml"
```

**Do NOT paste any content yet.** Just get the file created.

---

## 👶 BABY STEP 4 — Write Your First Workflow

**What to paste into `.github/workflows/ci.yml`:**

```yaml
name: Test CI Pipeline

# When should this run?
on:
  push:
    branches: [ main ]

# What jobs to run?
jobs:
  test:
    name: Run Tests
    runs-on: ubuntu-latest

    steps:
      # Step 1: Get my code
      - name: Checkout code
        uses: actions/checkout@v4

      # Step 2: Install Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18.x'

      # Step 3: Install npm packages
      - name: Install dependencies
        run: npm install

      # Step 4: Run tests
      - name: Run tests
        run: npm test
```

**Save the file.**

---

## 👶 BABY STEP 5 — Push to GitHub

**What to do:**

```powershell
git add .github/workflows/ci.yml
git commit -m "ci: add my first GitHub Actions workflow"
git push origin main
```

**What happens:**
- The file goes up to GitHub
- GitHub sees it's in `.github/workflows/`
- GitHub Actions detects it and **automatically starts running it** (you don't need to click anything!)

---

## 👶 BABY STEP 6 — Watch GitHub Actions Run

**What to do:**

1. Go to: `https://github.com/Swap2204/CI_CD_Demo`
2. Click the **Actions** tab (top of the page)
3. You should see a workflow named **"Test CI Pipeline"**
4. Click it to see it running
5. Wait ~2 minutes

**What you should see:**
- 4 steps: Checkout → Setup Node → Install dependencies → Run tests
- Each step gets a green ✅ as it completes
- If all green → "Success!" 🎉
- If any red → click to see what failed

---

## 👶 BABY STEP 7 — Prove It Works Again

**What to do:**

Make a tiny change, watch CI run again:

```powershell
# Add a comment to app.js (any line)
# Save the file

git add .
git commit -m "test: verify CI runs again"
git push origin main
```

Go back to GitHub → Actions tab. New run should start automatically!

This proves CI is catching your changes.

---

## 🎓 WHAT YOU LEARNED

**GitHub Actions automatically:**
- Finds workflow files in `.github/workflows/`
- Triggers them on `on:` conditions (pushes, PRs, etc.)
- Runs `jobs` with `steps` on fresh machines
- Reports results back to GitHub

**Key concepts:**
- `name:` = What the workflow is called
- `on:` = When it runs (push, pull_request, etc.)
- `runs-on:` = What machine type to use (ubuntu-latest is free)
- `steps:` = The actual commands to run

**Every step has:**
- `name:` = Label you see in GitHub Actions UI
- `uses:` = A pre-built action from GitHub's marketplace (checkout, setup-node, etc.)
- `run:` = A shell command to run (npm install, npm test, etc.)

---

## 📚 REFERENCE — Cheat Sheet

**Common GitHub actions:**
- `actions/checkout@v4` - Download your code
- `actions/setup-node@v4` - Install Node.js
- `actions/setup-python@v4` - Install Python
- `actions/upload-artifact@v4` - Save files from CI as downloads

**Common triggers (`on:`):**
- `push: branches: [ main ]` — Run when pushed to main
- `pull_request: branches: [ main ]` — Run when a PR is opened
- `workflow_dispatch` — Manually trigger with a button

**Strategy matrix (test on multiple versions):**
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]  # Runs job twice, once per version
```

---

## 🐛 TROUBLESHOOTING

**Problem:** Workflow doesn't appear in Actions tab
**Fix:** Make sure path is EXACTLY `.github/workflows/` (not `github/workflows/`)

**Problem:** "npm install" fails
**Fix:** Make sure `package-lock.json` is committed — CI needs it for exact versions

**Problem:** Tests fail in CI but pass locally
**Fix:** `npm install` vs `npm ci` — CI uses `npm ci` (clean install based on package-lock.json)

---

## ✍️ SIGN-OFF

Before you finish, make sure you can check ALL the checkboxes at the top of this file.

**You just built your own CI pipeline from scratch.** You're now officially doing DevOps.

**Date:** ________________
**Your name:** ________________

---

## 🚀 NEXT STEPS (After This Ticket)

1. Add another job to the workflow (e.g., "lint")
2. Make the workflow run on pull requests
3. Make the workflow fail fast if a certain test fails
4. Use a strategy matrix to test on Node 18 AND Node 20
5. Upload the coverage report as a downloadable artifact

All of these are just more lines in the same `.yml` file.

**Git it!**