# @design-system monorepo
> This monorepo contains web and mobile components, and some configurations about @design-system solutions


Packages that are public into this monorepo: 

###### [`@design-system/eslint-config`](/configs/eslint-config) - Default configs by eslint
###### [`@design-system/jest-config`](/configs/jest-config) - Default configs by jest
###### [`@design-system/ts-config`](/configs/ts-config) - Default configs by typescript
###### [`@design-system/web`](/packages/web) - Web components


### Documentation
[Click here](/doc) to access the documentation.

### Getting start

#### Clone and Install
After the repository was cloned, run:

```sh
$ yarn && yarn lerna bootstrap
```

#### @design-system/doc
```sh
# watch
$ yarn start
# localhost:9009

# build & serve
$ yarn build:doc && yarn serve
# localhost:8000 
```

### Publish

#### From official @design-system registry
To publish the packages, you can run at monorepo root or inside the specific package:
```sh
$ yarn pub
```

#### To local development environment

You need to download Verdaccio docker image, create a container and start it:

```sh
# download the verdaccio docker image
$ docker pull verdaccio/verdaccio

# create container with verdaccio
$ docker create -it --name verdaccio -p 4873:4873 verdaccio/verdaccio

# run verdaccio's container
$ docker start verdaccio

# create a user to access the verdaccio registry
$ npm adduser --registry http://localhost:4873
```

To publish the packages locally, you can run at monorepo root or inside the specific package:
```sh
$ yarn pub:local
```

### Unpublish locally

To unpublish the packages locally, you can run at monorepo root or inside the specific package:
```sh
$ yarn unpub:local
```

### Installation

#### From official @design-system registry
```sh
$ yarn add @design-system/PACKAGE_YOU_WANT
```

#### From local development environment
To install packages provided by local verdaccio, run:
```sh
$ yarn add @design-system/PACKAGE_YOU_WANT --registry http://localhost:4873
```
