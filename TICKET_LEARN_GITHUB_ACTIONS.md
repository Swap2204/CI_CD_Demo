# LEARN GITHUB ACTIONS FROM SCRATCH (ABSOLUTE BEGINNER)
**Repo:** `Swap2204/CI_CD_Demo`  
**Goal:** You create the CI workflow yourself, end-to-end.
## What you are building
You will create one file: `.github/workflows/ci.yml`
This file tells GitHub:
1. When to run (`on: push`)
2. Where to run (`runs-on: ubuntu-latest`)
3. What to do (checkout code, install Node, install packages, run tests)
## Quick checklist
- [ ] I understand what YAML is
- [ ] I can navigate to the project folder
- [ ] I created `.github/workflows/ci.yml`
- [ ] I added valid workflow content
- [ ] I committed and pushed the file
- [ ] I opened GitHub Actions and saw it run
- [ ] I made one more commit and saw it run again
## Baby step 1: Understand YAML (no coding yet)
YAML is just a structured text format.
Important rules:
- Indentation matters (2 spaces recommended)
- `key: value` format
- Lists start with `-`
Tiny YAML example:
```yaml
name: Example
on:
  push:
    branches: [ main ]
jobs:
  test:
    runs-on: ubuntu-latest
```
If indentation is wrong, workflow fails. So keep spaces consistent.
## Baby step 2: Navigate to your project folder
Run this exactly:
```powershell
cd C:\Users\owner\Documents\CI_CD_Demo
pwd
ls
```
You should see project files like `app.js`, `package.json`, `tests`.
## Baby step 3: Create GitHub workflow folders
Run:
```powershell
New-Item -ItemType Directory -Path ".github" -Force
New-Item -ItemType Directory -Path ".github\workflows" -Force
```
This creates the exact folder path GitHub Actions scans.
## Baby step 4: Create workflow file
Run:
```powershell
New-Item -ItemType File -Path ".github\workflows\ci.yml" -Force
```
Now open the file in VS Code and paste this exact content:
```yaml
name: Node CI
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```
## Baby step 5: Understand each line you pasted
- `name: Node CI` -> workflow label in GitHub UI
- `on:` -> when workflow triggers
- `push` and `pull_request` -> run on code push and PR
- `jobs:` -> group of tasks
- `test:` -> job name
- `runs-on: ubuntu-latest` -> machine used by GitHub
- `steps:` -> ordered commands/actions
- `uses: actions/checkout@v4` -> downloads your repo
- `uses: actions/setup-node@v4` -> installs Node
- `run: npm ci` -> installs dependencies from lockfile
- `run: npm test` -> runs Jest tests
## Baby step 6: Commit and push your workflow
Run:
```powershell
git add .github/workflows/ci.yml
git commit -m "ci: add GitHub Actions workflow from scratch"
git push origin main
```
## Baby step 7: Verify in GitHub Actions UI
1. Open `https://github.com/Swap2204/CI_CD_Demo`
2. Click **Actions**
3. Click latest **Node CI** run
4. Open the `test` job
5. Confirm all steps are green
If red, click failed step and read error logs.
## Baby step 8: Practice by changing workflow yourself
Open `.github/workflows/ci.yml` and change Node version:
- from `'18'` to `'20'`
Then run:
```powershell
git add .github/workflows/ci.yml
git commit -m "ci: practice change node version to 20"
git push origin main
```
Go to Actions tab and confirm a new run starts.
## Troubleshooting
- Workflow not showing in Actions:
  - confirm file path is exactly `.github/workflows/ci.yml`
- YAML error:
  - check spacing/indentation, no tabs
- `npm ci` fails:
  - ensure `package-lock.json` exists and is committed
- Tests fail:
  - run `npm test` locally and fix tests first
## Done criteria
- [ ] I created workflow file from scratch
- [ ] I understand each workflow section
- [ ] I can trigger workflow by pushing changes
- [ ] I can read logs in Actions and debug failures
