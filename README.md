## React-components

The purpose of this repository is to be the central repository for all Digital Help React Components.

## Installation

To install the package you can use the Yarn installer or the normal npm install.

    yarn install
    npm install

After the install completes it will build out the `/dist/build` folder for publishing to Artifactory for distribution.

## Storybook

Storybook is an opensource tool for developing and displaying react components. For more information about Storybook please visit the <a href="https://storybook.js.org/basics/introduction/" target="_blank">documentation site</a>.

### Running Storybook Locally

While developing a new component or updating an existing one a developer may want to see the changes live. In order to start the storybook run the following commands after installation.

    yarn storybook
    npm run storybook

### Build Static Storybook Site

Storybook has a feature for creating static sites that we can host in AWS S3. In order to generate the static assets that need to be put into the bucket run the following command.

    yarn build-storybook
    npm run build-storybook

## Versioning

When publishing a new version of the DHX React Components library

    npm version <major|minor|patch|prerelease>

## Build & Publish

After Versioning the package you should be ready to Build and Publish the module for distribution.

    npm publish dist/build

## Contributing

Please check out the [Contributors Guide](CONTRIBUTING.md).
