
const editJsonFile = require('edit-json-file');
const argv = require('minimist')(process.argv.slice(2));
const pkg = require('../package.json');
const version = (argv.buildVersion) ? `v${argv.buildVersion}` : `v${pkg.version}`

const newPkg = editJsonFile('package.json');
const homePage = [
    "https://s3.amazonaws.com",
    pkg.awsConfig.storybookBucket,
    "akn",
    "app",
    version].join('/')
newPkg.set("homepage", homePage)
console.log(newPkg.toObject());
newPkg.save();
