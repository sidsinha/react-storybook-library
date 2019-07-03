@Library('PSL') _
def common_jenkins = new ors.utils.common_jenkins(steps, env)
def common_scm = new ors.utils.common_scm(steps, env)

/* DOCKER */
BUILD_CONTAINER_IMAGE = 'autodesk-docker.art-bobcat.autodesk.com:10873/digital-help/node-react:latest'

/* PIPELINE */
PIPELINE_TYPE = 'component-library'

/* NOTIFICATIONS */
BUILD_INFO="${env.JOB_NAME} ${env.BUILD_NUMBER} \n ${env.BUILD_URL}";
TEAM_SLACK_CHANNEL = '#dhx-react-notif'
TEAM_EMAIL = 't5g0i9v7b2w5b7t3@autodesk.slack.com'
PROJECT_NAME='dh-akn-react-components'
S3_BUCKET='akn-react-components'
SERVICE_ACCOUNT = 'SERVICE_USER'
SERVICE_ACCOUNT_SSH = 'svc_p_dh-auto'

/*
Vault
*/
VAULT = [
  ADDRESS: 'https://vault.aws.autodesk.com',
  PRD: [
    PATH: 'dpe/digital-help-uhm-prd/aws/uhm-prd/sts/vault-user'
  ],
  STG: [
    PATH: 'dpe/digital-help-uhm-stg/aws/uhm-dev/sts/vault-user'
  ],
  INT: [
    PATH: 'dpe/digital-help-uhm-int/aws/uhm-dev/sts/vault-user'
  ],
  DEV: [
    PATH: 'dpe/digital-help-uhm-dev/aws/uhm-dev/sts/vault-user'
  ]
]

/* ARTIFACTORY */
NPM_REGISTRY = 'https://art-bobcat.autodesk.com/artifactory/'
NPM_AUTH = 'api/npm/auth'
NPM_VIRTUAL_REPO = 'api/npm/autodesk-npm/'
NPM_TEAM_REPO = 'api/npm/autodesk-npm/'

node('aws-centos'){

  dir('parameters'){
    git url: 'https://git.autodesk.com/dpe/dh-ci-scripts.git' , branch: 'master', credentialsId: 'ors_git_service_account'
  }
  def parameters = load './parameters/helpers/parameters.groovy'
  parameters.load()

  checkout scm  
  dir('pipelines'){
    git url: 'https://git.autodesk.com/dpe/dh-ci-scripts.git' , branch: 'master', credentialsId: 'ors_git_service_account'
  }
  def pipeline = load './pipelines/helpers/entry.groovy'

  pipeline.start(common_jenkins, common_scm)

}