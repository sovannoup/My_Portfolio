pipeline {
    agent {
        docker {
            image 'node:16.17.0' 
            args '-p 80:80' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}