pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Geek-Mac-Solutions/admin-panel.git'
            }
        }

        stage('Copy Workspace to Live') {
            steps {
                script {
                    // Define the source and destination directories
                    def sourceDir = "/var/lib/jenkins/workspace/${JOB_NAME}/"  // Use the correct job name for dynamic path
                    def destinationDir = "/www/wwwroot/student.work.gd/"

                    // Ensure the target directory exists before copying
                    sh "mkdir -p ${destinationDir}"

                    // Copy the files to the live environment
                    sh "cp -r \"${sourceDir}\"* ${destinationDir}"
                }
            }
        }

        stage('Deploy Live') {
            steps {
                // Example of deploying to live, could include Docker restart, service start, etc.
                echo 'Deploying live...'
                // Add any additional commands you need for the deployment
            }
        }

        stage('Clean Workspace') {
            steps {
                echo 'Cleaning workspace...'
                // Remove the files from the workspace after deployment
                cleanWs()
            }
        }
    }

    post {
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
