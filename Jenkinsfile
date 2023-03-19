pipeline {
    agent any
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
}
post{
    always{  
            success{
            slackSend channel: '#test-slack-integration-to-jenkins',  color: '#c0c0c0', message: "Repo: ${env.JOB_NAME} - BuildNo: ${env.BUILD_NUMBER} - live site: ${env.Live_Site}"
        }     
            failure {       
            emailext body: "RepoName-: ${env.JOB_NAME} - BuildNo: ${env.BUILD_NUMBER} - live site: ${env.Live_Site}",
            subject: 'Gallery-Jenkins-Deployment',
            to: 'dorothy1cherotich@gmail.com'
            }
    }
            
}

