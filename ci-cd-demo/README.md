# CI/CD Demo - Beginner-Friendly Project

A simple REST API project demonstrating CI/CD workflows using GitHub Actions and Jenkins.

## Project Overview

This is a beginner-friendly project that showcases:
- Simple Express.js REST API with CRUD operations
- automated testing with Jest
- Docker containerization
- GitHub Actions CI/CD pipeline
- Jenkins declarative pipeline

## Prerequisites

- Node.js 16+ (ideally 18 or 20)
- npm or yarn
- Docker (for containerization)
- Git

## Getting Started

### 1. Clone and Setup

```bash
git clone <your-repo-url>
cd ci-cd-demo
npm install
```

### 2. Run Locally

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### Health Check
```bash
GET /health
```
Returns the health status of the service.

### Get All Items
```bash
GET /items
```
Returns a list of all items.

### Get Single Item
```bash
GET /items/:id
```
Returns a specific item by ID.

### Create Item
```bash
POST /items
Content-Type: application/json

{
  "name": "Item name",
  "description": "Optional description"
}
```

### Update Item
```bash
PUT /items/:id
Content-Type: application/json

{
  "name": "Updated name",
  "description": "Updated description"
}
```

### Delete Item
```bash
DELETE /items/:id
```

## Testing

Run all tests with coverage:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Docker

### Build Image
```bash
docker build -t ci-cd-demo .
```

### Run Container
```bash
docker run -p 3000:3000 ci-cd-demo
```

### Test Docker Container
```bash
curl http://localhost:3000/health
curl http://localhost:3000/items
```

## CI/CD Implementations

### GitHub Actions

The GitHub Actions workflow (`.github/workflows/ci.yml`) automatically:
- Runs on every push to main/master/develop branches
- Runs on every pull request to these branches
- Tests on multiple Node.js versions (16, 18, 20)
- Builds Docker images
- Runs smoke tests on the container

---

### Jenkins

Jenkins pipeline (`Jenkinsfile`) includes stages for:
1. **Checkout**: Pulls code from repository
2. **Install Dependencies**: Runs `npm ci`
3. **Run Tests**: Executes Jest tests and publishes coverage
4. **Build Docker Image**: Creates Docker image with build number
5. **Archive Artifacts**: Saves coverage reports

#### Jenkins Setup Requirements:

1. Install Jenkins plugins:
   - NodeJS Plugin
   - Docker Pipeline Plugin
   - HTML Publisher Plugin
   - Pipeline: Stage View Plugin

2. Configure Node.js in Jenkins:
   - Manage Jenkins → Global Tool Configuration → Node.js installations
   - Install Node.js 18.x
   - Name it "NodeJS"

3. Create a Pipeline job:
   - New Item → Pipeline → Enter name → OK
   - Under "Pipeline" section, select "Pipeline script from SCM"
   - SCM: Git
   - Repository URL: Your GitHub repository
   - Script Path: Jenkinsfile

4. Trigger the pipeline to run

## Project Structure

```
ci-cd-demo/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── tests/
│   └── app.test.js         # Jest unit tests
├── app.js                  # Express application
├── package.json            # Dependencies and scripts
├── Dockerfile              # Docker configuration
├── Jenkinsfile             # Jenkins pipeline definition
└── README.md               # This file
```

## Understanding CI/CD

### What is CI (Continuous Integration)?

Continuous Integration is the practice of regularly integrating code changes into a shared repository. In this project:
- Every push triggers automated testing
- Tests run across multiple Node.js versions
- Issues are caught early in the development cycle

### What is CD (Continuous Delivery)?

Continuous Delivery extends CI by ensuring code is always in a deployable state. In this project:
- Docker images are built automatically
- Containers are tested before deployment
- Artifacts are archived for deployment

## Learning Outcomes

By working through this project, you'll learn:

1. **REST API Development**: Building a simple CRUD API with Express.js
2. **Automated Testing**: Writing and running unit tests with Jest
3. **Containerization**: Packaging applications with Docker
4. **GitHub Actions**: Creating automated workflows for CI/CD
5. **Jenkins Pipelines**: Setting up declarative pipelines
6. **Best Practices**: Code quality, testing, and deployment strategies

## Next Steps

After getting this project running:
1. Add a database (MongoDB or PostgreSQL)
2. Implement authentication (JWT)
3. Add rate limiting
4. Deploy to a cloud platform (AWS, GCP, Azure)
5. Add deployment stage to pipelines
6. Create development, staging, and production environments

## Troubleshooting

### Port 3000 already in use
```bash
# On Linux/Mac
lsof -ti:3000 | xargs kill

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Docker issues
```bash
# If you can't run Docker commands
# On Linux, add your user to docker group:
sudo usermod -aG docker $USER

# Then logout and login again
```

### Package installation issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and install again
rm -rf node_modules package-lock.json
npm install
```

## License

MIT