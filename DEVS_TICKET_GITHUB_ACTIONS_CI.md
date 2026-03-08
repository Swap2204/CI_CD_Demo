# DevOps Ticket: Configure GitHub Actions CI Pipeline

**Ticket ID:** DEV-001  
**Priority:** High  
**Assigned to:** DevOps Team  
**Created:** 2025-03-08  
**Estimated Effort:** 2-4 hours

---

## Objective

Set up and configure GitHub Actions CI pipeline for the ci-cd-demo project to automatically test and build on every push and pull request.

---

## Context

The project `ci-cd-demo` is located at `C:\Users\owner\ci-cd-demo` and contains:
- Node.js Express REST API
- Jest unit tests
- Dockerfile for containerization
- GitHub Actions workflow configuration (`.github/workflows/ci.yml`) - **READY**
- Jenkinsfile (for potential future use)

---

## Requirements

### 1. Repository Setup
- [ ] Create a new GitHub repository for the project
- [ ] Push source code from `C:\Users\owner\ci-cd-demo` to GitHub
- [ ] Enable GitHub Actions on the repository

### 2. GitHub Actions Workflow Configuration
- [ ] Ensure `.github/workflows/ci.yml` is committed to the repository
- [ ] Verify the workflow file is correctly formatted YAML
- [ ] Trigger workflow on first push to validate setup

### 3. Pipeline Configuration
The CI pipeline must:
- [ ] Run on every push to branches: `main`, `master`, `develop`
- [ ] Run on pull requests to branches: `main`, `master`, `develop`
- [ ] Test across Node.js versions: 16.x, 18.x, 20.x
- [ ] Install dependencies using `npm ci`
- [ ] Run all tests with coverage: `npm test`
- [ ] Build Docker image tagged with commit SHA
- [ ] Run smoke test on built container (health check endpoint)

### 4. Actions Marketplace Dependencies
Ensure these actions are available:
- [ ] `actions/checkout@v4`
- [ ] `actions/setup-node@v4`
- [ ] `docker/setup-buildx-action@v3`
- [ ] `codecov/codecov-action@v3` (optional, for coverage reports)

### 5. Security Considerations
- [ ] No secrets required for initial setup
- [ ] If Docker registry upload is added later, configure credentials as GitHub secrets
- [ ] Use GitHub's security advisories for any dependency alerts

### 6. Status Badges (Optional)
- [ ] Create GitHub Actions status badge for README.md
- [ ] Add badge to project documentation

---

## Technical Details

### Workflow Location
`<repository-root>/.github/workflows/ci.yml`

### Key Workflow Stages

**Stage 1: Test Matrix**
```yaml
- Checkout code
- Setup Node.js (16.x, 18.x, 20.x)
- Install dependencies (npm ci)
- Run tests (npm test)
- Upload coverage (Node 18.x only)
```

**Stage 2: Build & Smoke Test**
```yaml
- Checkout code
- Set up Docker Buildx
- Build Docker image
- Run container (port 3000)
- Health check via curl
```

### Docker Configuration
- Base image: `node:18-alpine`
- Exposed port: 3000
- Health endpoint: `http://localhost:3000/health`

---

## Implementation Steps

### Step 1: Repository Initialization
```bash
cd C:\Users\owner\ci-cd-demo
git init
git add .
git commit -m "Initial commit: CI/CD demo project"
```

### Step 2: Create GitHub Repository
1. Go to GitHub → New repository
2. Name: `ci-cd-demo` (or preferred name)
3. Make it public or private based on requirements
4. Don't initialize with README (code already exists)
5. Copy remote URL

### Step 3: Push to GitHub
```bash
git remote add origin <repository-url>
git branch -M main
git push -u origin main
```

### Step 4: Verify GitHub Actions
1. Navigate to repository in GitHub
2. Go to "Actions" tab
3. Verify workflow is recognized
4. Check that it triggered after push

### Step 5: Monitor First Run
1. Watch the workflow execution
2. Verify all stages pass
3. Check test results
4. Verify Docker build and smoke test

### Step 6: Add Status Badge (Optional)
```markdown
![CI](https://github.com/<owner>/<repo>/actions/workflows/ci.yml/badge.svg)
```

---

## Acceptance Criteria

✅ GitHub repository created with all source code  
✅ GitHub Actions workflow runs automatically on pushes  
✅ All tests pass on all Node.js versions (16, 18, 20)  
✅ Docker image builds successfully  
✅ Container smoke test passes (responds to health check)  
✅ Workflow completes without errors  
✅ Project README can include GitHub Actions badge  

---

## Troubleshooting Checklist

If the pipeline fails, check:

1. **Workflow syntax errors**
   - Ensure YAML is properly formatted
   - Check for invalid action versions

2. **Node.js setup issues**
   - Verify Node.js versions in matrix are available
   - Check for npm version compatibility

3. **Build errors**
   - Verify `package.json` is valid
   - Check for missing dependencies
   - Ensure test files exist in `tests/` directory

4. **Docker issues**
   - Verify Docker is installed in GitHub runner
   - Check if Dockerfile is properly formatted
   - Ensure ports are not conflicting

5. **Test failures**
   - Run `npm test` locally first
   - Check test logs for specific failures
   - Verify all test files are included

---

## Current Project Structure

```
ci-cd-demo/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow (complete)
├── tests/
│   └── app.test.js             # Jest unit tests
├── app.js                      # Express REST API
├── package.json                # Dependencies & scripts
├── Dockerfile                  # Docker configuration
├── Jenkinsfile                 # Jenkins pipeline (future use)
├── .gitignore                  # Git ignore rules
└── README.md                   # Documentation
```

---

## Deliverables

1. ✅ GitHub repository with source code
2. ✅ GitHub Actions workflow successfully running
3. ❌ Status badge in README (optional)
4. ❌ Documentation on how to modify workflow (optional)

---

## Notes & Dependencies

- **Blockers:** None - all code and configurations are complete
- **Dependencies:** GitHub Actions service availability
- **Prerequisites:** GitHub account, repository access, internet connection
- **Resources:** GitHub Actions documentation, Docker documentation

---

## Contact

For questions or clarifications:
- Project location: `C:\Users\owner\ci-cd-demo`
- Review `.github/workflows/ci.yml` for exact workflow configuration
- Review `README.md` for CI/CD explanations

---

## Sign-off

**DevOps Team:**
- [ ] Reviewed ticket
- [ ] Implementation completed
- [ ] Verified all acceptance criteria
- [ ] Approved for production use

**Date:** ___________________
**Signed:** ___________________