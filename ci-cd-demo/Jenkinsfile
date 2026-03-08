pipeline {
    agent any
    
    environment {
        NODE_HOME = tool 'NodeJS'
        PATH = "${env.NODE_HOME}/bin:${env.PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    publishHTML(target: [
                        reportDir: 'coverage',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report',
                        alwaysLinkToLastBuild: true,
                        keepAll: true
                    ])
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build('ci-cd-demo:${BUILD_NUMBER}')
                }
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'coverage/*', fingerprint: true
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}