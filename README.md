```
new directory
git init
npm init -y
git add .
git commit -m "npm init"
git remote add origin https://github.com/blakemade/node-server.git
git push --set-upstream origin master
npm install --save-dev typescript
$ vim .git ignore and paste https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore
git add .
git commit -m "ts and .gitignore for node.js"
from   https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/

# setup a Typescript compiler configuration file tsconfig.json
./node_modules/.bin/tsc --init

npm i save-dev @types/node 

git add .
git commit -m "tsc init, installed node @types, edited .tsconfig [lib 'es6',noimplicit any: true]"
git push

open vs code, make new src and out directory, create index.ts in VSC

git add .
git commit -m "src and out, "
git push

next: set up jest...

git add .
git commit -m ""
git push


git add .
git commit -m ""
git push
```
