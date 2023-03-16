pipeline {
    agent any
    parameters {
        string defaultValue: 'latest', description: 'Application Version Tag', name: 'Version', trim: true
    }
    stages {
        stage("Git checkout") {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'Github-cred', url: 'https://github.com/Aaketk17/JenkinsPipeline.git']])
            }
        }
        stage("Sample stage") {
            echo "hellooo"
        }
    }
}