pipeline {
    agent any

    environment {
        SSH_PRIVATE_KEY = credentials('GEEKMAC')  // Ensure this is the correct ID for your SSH private key credentials
    }

    stages {
        stage('Checkout code') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], userRemoteConfigs: [[url: 'https://github.com/Geek-Mac-Solutions/students-panel.git']]])  // Change URL to your repo
            }
        }

        stage('Install SSH key and Deploy') {
            steps {
                script {
                    // Using ssh-agent to securely handle the SSH key
                    sshagent(['GEEKMAC']) {
                        // Verify if the SSH key is added and then deploy via SSH
                        sh 'ssh-add -l'  // List loaded SSH keys to verify

                        // Deploy files and create a timestamped file on the server
                        sh '''
                            scp -o StrictHostKeyChecking=no -r ./* root@18.140.137.114:/www/wwwroot/student.work.gd
                            ssh -o StrictHostKeyChecking=no root@18.140.137.114 "touch /www/wwwroot/student.work.gd/$(date +\"%Y-%m-%d_%H-%M-%S\").txt"
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            // Ensure cleanup of sensitive files or any additional steps
            echo 'Cleaning up workspace and removing any temporary files'
            // Optionally, you can remove the SSH private key file here if needed
            // sh 'rm -f id_rsa'
        }
    }
}
