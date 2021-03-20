pipeline {
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
          dockerImageLatest = docker.build registry + ":latest"
        }

      }
    }

    stage('Push Docker Image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
            dockerImageLatest.push()
          }
        }

      }
    }

    stage('Remove Unused docker image') {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
environment {
    registry = 'mdsajii/hello_mascow'
    registryCredential = 'dockerId'
    dockerImage = ''
    dockerImageLatest = ''
  }
}
}
