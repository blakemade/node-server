```
new directory
git init
npm init -y
git add .
git commit -m "npm init"
git remote add origin https://github.com/blakemade/node-server.git
git push --set-upstream origin master
npm install --save-dev typescript
$ vim .git ignore and paste https://raw.githubusercontent.com/github/gitignore/
master/Node.gitignore

git add .
git commit -m "ts and .gitignore for node.js"

from   https://blog.angular-university.io/typescript-2-type-system-how-do-type-
definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/

# setup a Typescript compiler configuration file tsconfig.json
./node_modules/.bin/tsc --init

npm i save-dev @types/node 

git add .
git commit -m "tsc init, installed node @types, edited .tsconfig [lib 'es6',
noimplicit any: true]"
git push

open vs code, make new src and out directory, create index.ts in VSC

git add .
git commit -m "src and out, "
git push

set up jest...
npm i jest @types/jest --save-dev

git add .
git commit -m "jest and @types/jest"
git push

config changes:
    package.json:
    "scripts": {
        "test": "jest"
    },
    "type": "commonjs"

    tsc.json:
    "exclude": [
        "node_modules,
        "**/*.spec.ts"
    ]
    }

$ vim index.spec.ts
$ jest --init

jest.config.js:
moduleFileExtensions: [
     "js",
     "json",
     "jsx",
    "ts",
    "tsx",
     "node"
   ],
roots: [
        "<rootDir>/src"
   ],
testEnvironment: "node",
 testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',


$ npm i ts-jest --save-dev
$ npm install --save-dev @babel/preset-typescript
$ npm install @babel/core @babel/node --save-dev
$ npm install --save-dev @babel/preset-env

made some test dirs and some tests. maybe made some changes to some config files.

git add .
git add A
git commit -m "dir structure and some tests"
git push

messed around with tests, added __tests__ and __mocks__, a server is created
and logs a message to the console. A new file is created. Working on testing 
the checks of file existance.

git commit -m "tests and mocks"

```
