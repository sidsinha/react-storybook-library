const editJsonFile = require('edit-json-file')
const pkg = require('../package.json');

const newPkg = editJsonFile('package.json')
newPkg.set("version", pkg.version.substring(0,5))
console.log(newPkg.toObject());
newPkg.save();
