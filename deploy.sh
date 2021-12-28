#!/usr/bin/env bash
set -e
git add -A
git commit -m 'Update my own website deployed on github'
#git commit -a -m 'update'

eval `ssh-agent`
ssh-add /home/ceelia/.ssh/github_id_rsa
git push -f git@github.com:celiae/celiae.github.io.git main
