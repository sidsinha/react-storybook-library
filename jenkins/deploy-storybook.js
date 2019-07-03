const qs = require('qs');
const argv = require('minimist')(process.argv.slice(2));
const spawn = require('child_process').spawn

const pkg = require('../package.json');

console.log(pkg)

const syncBucket = ({ bucket, storybookPath, ...state }) => {
    return new Promise((resolve, reject) => {
        const deploy = spawn('aws', [
            's3',
            'sync',
            '--acl',
            'public-read',
            `${storybookPath}`,
            `s3://${bucket}`
        ])
        deploy.stdout.on('data', function (data) {
            console.log('' + data);
        });

        deploy.stderr.on('data', function (data) {
            console.log('(error): ' + data);
        });

        deploy.on('close', function (code) {
            console.log('Created S3 Bucket: ' + bucket);
            resolve({
                "status": "success"
            })
        });
    })
}

const deployStorybook = async () => {
    console.log("SYNCING VERSION BUCKET")
    await syncBucket({
        bucket: `${pkg.awsConfig.storybookBucket}/akn/storybook/v${pkg.version}/`,
        storybookPath: `${pkg.awsConfig.storybookOutput}`
    })
    console.log("SYNCING RELEASE CANDIDATE BUCKET")
    await syncBucket({
        bucket: `${pkg.awsConfig.storybookBucket}/akn/storybook/v${pkg.version.substring(0,5)}-rc/`,
        storybookPath: `${pkg.awsConfig.storybookOutput}`
    })
    console.log("SYNCING MINOR VERSION BUCKET")
    await syncBucket({
        bucket: `${pkg.awsConfig.storybookBucket}/akn/storybook/v${pkg.version.substring(0, 3)}/`,
        storybookPath: `${pkg.awsConfig.storybookOutput}`
    })
}
deployStorybook()
