pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Maven Build') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t up-tourism:1.0 .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                bat 'docker rm -f up-tourism-container || exit 0'
                bat 'docker run -d --name up-tourism-container -p 8090:80 up-tourism:1.0'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment completed successfully.'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}