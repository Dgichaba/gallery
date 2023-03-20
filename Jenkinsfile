pipeline {
    agent any
     environment {
        EMAIL_BODY = 
        """
            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
            <p>
            View console output at 
            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
            </p> 
            <p><i>(Build log is attached.)</i></p>
        """
        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 
        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 
        EMAIL_RECEPIENT = 'dorothy1cherotich@gmail.com'
    }
    tools {
        nodejs '19.8.0'
    }
    stages {
        stage('Start') {
            steps {
                echo 'Build is starting'
            }
        }
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/Dgichaba/gallery.git', branch: 'master'

            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build'){
            steps{
                echo('Build successful')
            }
        }
       
        stage('deploy'){
            steps {
                bat 'curl -X POST https://api.render.com/deploy/srv-cg5por4eoogqpifhfvog?key=WvxZ77ty-Kc'
           
            }
        }
       
        stage('End') {
            steps {
                echo 'Deployment completed'
            }
        }
    }
    post{
        failure {
            emailext attachLog: true, 
                body: EMAIL_BODY, 
                subject: EMAIL_SUBJECT_FAILURE, 
                to: EMAIL_RECEPIENT
        }
        success {
            slackSend channel: '#dorothy_ip1',
                        color: 'good',
                        message: "The pipeline ${currentBuild.fullDisplayName} completed successfully. Visit https://gallery-app-1ho8.onrender.com "
        }
    }     
}

