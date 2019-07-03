/* eslint-disable no-console */

const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')

async function copyFile(file) {
  const buildPath = path.resolve(__dirname, '../dist/build/', path.basename(file))
  await fse.copy(file, buildPath)
  console.log(`Copied ${file} to ${buildPath}`)
}

function typescriptCopy(from, to) {
  const files = glob.sync('**/*.d.ts', { cwd: from })
  const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)))
  return Promise.all(cmds)
}

async function createPackageFile() {
  console.log('I am copying package file')
  const packageData = await fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8')
  console.log(packageData)
  const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } = JSON.parse(packageData)
  const newPackageData = {
    ...packageDataOther,
    main: 'index.js',
    module: 'index.es.js',
    private: false,
  }
  const buildPath = path.resolve(__dirname, '../dist/build/package.json')

  await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8')
  console.log(`Created package.json in ${buildPath}`)

  return newPackageData
}

async function prepend(file, string) {
  const data = await fse.readFile(file, 'utf8')
  await fse.writeFile(file, string + data, 'utf8')
}

async function addLicense(packageData) {

  const license = `/** @license Autodesk, Inc v${packageData.version}
 *
 * Copyright (c) ${new Date().getFullYear()} Autodesk, Inc.  All rights reserved.
 * This computer source code and related instructions and
 * comments are the unpublished confidential and proprietary
 * information of Autodesk, Inc. and are protected under
 * applicable copyright and trade secret law.  They may not
 * be disclosed to, copied or used by any third party without
 * the prior written consent of Autodesk, Inc.
 */
`
  await Promise.all(
    ['../dist/build/index.js', '../dist/build/index.es.js'].map(file =>
      prepend(path.resolve(__dirname, file), license),
    ),
  )
}

async function run() {
  console.log('I am running')
  console.error('Hello')
  await Promise.all(['./README.md', './CHANGELOG.md', './LICENSE', '.gitignore', '.npmignore'].map(file => copyFile(file)))
  const packageData = await createPackageFile()
  await addLicense(packageData)

  // TypeScript
  // const from = path.resolve(__dirname, '../src');
  // // await Promise.all([
  // //   typescriptCopy(from, path.resolve(__dirname, '../build')),
  // //   typescriptCopy(from, path.resolve(__dirname, '../build/es')),
  // // ]);
}
console.log('I am running')
run()