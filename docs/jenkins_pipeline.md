node {
    stage('Preparation') {
        git 'https://github.com/cr0hn/vulnerable-node'
    }
    stage('install'){
        sh '/usr/bin/npm install' // Dependency Installation stage
    }
    stage('Scan') {
        snykSecurity(
            severity: 'medium',
            snykInstallation: 'Snyk',
            snykTokenId: 'SnykTokenId',
            targetFile: 'package.json'
            )
    }
    stage('Build') {
        echo "Build"
    }
    stage('Results') {
        echo "Test Result"
    }
}
