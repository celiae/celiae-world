#!/usr/bin/env bash

# abort on errors
set -e

git add -A

git commit -m 'Update my own website source code deployed on github'
#git commit -a -m 'update'

eval `ssh-agent`

ssh-add /home/ceelia/.ssh/github_id_rsa

git push -f git@github.com:celiae/celiae.github.io.git main

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init

git add -A

git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:celiae/celiae.github.io.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -