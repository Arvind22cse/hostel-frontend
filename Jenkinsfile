pipeline {
    agent any

    environment {
        IMAGE_NAME = 'arvindm2004/hostel_frontend'
        TAG = 'latest'
        CONTAINER_NAME = 'vite-container'
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials' // set in Jenkins > Credentials
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Arvind22cse/hostel-frontend.git'  // 🔁 Replace with your GitHub repo
            }
        }

        stage('Build App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${TAG}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_HUB_CREDENTIALS}") {
                        docker.image("${IMAGE_NAME}:${TAG}").push()
                    }
                }
            }
        }

        stage('Remove Existing Container') {
            steps {
                script {
                    sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    """
                }
            }
        }

        stage('Deploy New Container') {
            steps {
                sh """
                docker run -d -p 3001:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:${TAG}
                """
            }
        }
    }

    post {
        success {
            echo "🚀 Successfully deployed ${IMAGE_NAME}:${TAG} to local Docker!"
        }
        failure {
            echo "❌ CI/CD pipeline failed."
        }
    }
}
