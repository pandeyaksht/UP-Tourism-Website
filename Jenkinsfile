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

        stage('Docker Build') {
            steps {
                bat 'docker build -t up-tourism:1.0 .'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker rm -f up-tourism-container || exit 0'
                bat 'docker run -d --name up-tourism-container -p 8090:80 up-tourism:1.0'
            }
        }
    }

    post {
        success {
            echo 'UP Tourism Website deployed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}