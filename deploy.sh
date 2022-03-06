#!/usr/bin/env sh

# abort on errors
set -e

# ssh
eval `ssh-agent`
ssh-add /home/ceelia/.ssh/github_id_rsa

# push source code
git add -A
git commit -m 'source code'
git push origin main
# git push -f git@github.com:celiae/ceblog.git main

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'ceelia.v6.navy' > CNAME

git init
git branch -m gh-pages
git add -A
git config user.email "ceelia0g@gmail.com"
git config user.name "Cheng Liang"
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:celiae/celiae.github.io.git gh-pages

cd -
