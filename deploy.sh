#!/usr/bin/env bash
set -e
git add -A
git commit -m 'update'
#git commit -a -m 'update'

eval `ssh-agent`
ssh-add /home/ceelia/.ssh/github_id_rsa
git push -f git@github.com:celiae/celiae.github.io.git main
