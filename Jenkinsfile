def app = 'Unknown'
pipeline {
  environment {
    registry = "mdsajii/hello_mascow"
    registryCredential = 'dockerid'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/mdsajii/hello_mascow.git'
      }
    }
}
stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
stage('Deploy Image') {
        steps{
         script {
      docker.withRegistry('https://registry.hub.docker.com', 'dockerid') {
            app = dockerImage.push("${env.BUILD_NUMBER}")
            app = dockerImage.push("latest")
        }
    }
  }
}
}
