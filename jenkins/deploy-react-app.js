const argv = require('minimist')(process.argv.slice(2));
const spawn = require('child_process').spawn

const pkg = require('../package.json');

console.log(pkg)

const syncBucket = ({ bucket, path, ...state }) => {
    return new Promise((resolve, reject) => {
        const deploy = spawn('aws', [
            's3',
            'sync',
            '--acl',
            'public-read',
            `${path}`,
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



const syncToS3 = async (VERSION) => {
    console.log()
    console.log("SYNCING BUILD BUCKET")
    
    await syncBucket({
        bucket: `${pkg.awsConfig.storybookBucket}/akn/app/v${VERSION}/`,
        path: `${pkg.awsConfig.buildFolder}`
    })
}

const deployReactApp = async () => {
    let version;
    switch (argv.release) {
        case "patch":
            version = pkg.version.substring(0, 5)
            await syncToS3(version)
            break
        case "minor":
            version = pkg.version.substring(0, 3)
            await syncToS3(version)
            break
        case "major":
            version = pkg.version.substring(0, 1)
            await syncToS3(version)
            break
        case "prerelease":
            version = argv.buildVersion
            await syncToS3(version);
            releaseCandidate = `${argv.buildVersion.substring(0, 5)}-rc`
            await syncToS3(releaseCandidate);
            break
        case "skip":
            version = argv.buildVersion
            await syncToS3(version);
            releaseCandidate = `${argv.buildVersion.substring(0, 5)}-rc`
            await syncToS3(releaseCandidate);
            break
        default:
            version = pkg.version
            console.info("Not Syncing Anything to S3, please provide a release parameter.")
            break
    }
    console.log(version)
}

deployReactApp()
