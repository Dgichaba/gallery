pipeline{
    agent any
    tools{nodejs 'node'}
    stages{
        stage('software installations and git cloning'){
        steps{ git 'https://github.com/Dgichaba/gallery.git'
        sh 'npm install'
       
        }
        }
       
        stage('Build'){
            steps{
                echo'build succesful'
            }
        }
        stage('Tests'){
            steps {
                sh 'npm test'}
        }
        stage('deploy to render'){
            steps{
                httpRequest httpMode: 'POST', responseHandle: 'NONE', url: 'https://api.render.com/deploy/srv-cg5por4eoogqpifhfvog?key=WvxZ77ty-Kc', wrapAsMultipart: false
                echo 'Deploy to render was a success'
               
            }
        }


