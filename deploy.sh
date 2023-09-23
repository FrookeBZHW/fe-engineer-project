#!/usr/bin/env sh

set -e

push_addr=`git remote get-url --push origin` # 获取当前仓库的远程url
commit_info=`git describe --all --always --long` # 每次提交详细的提交信息
dist_path=docs/.vuepress/dist # 提前记录打包后资源目录
push_branch=gh-pages # 推送到另一分枝 不影响原分支

npm run docs:build # 生成静态资源

cd $dist_path
# 将生成后的资源提交到远程的新分支 
git init
git add -A
git commit -m "deploy, $commit_info"
git push -f $push_addr HEAD:$push_branch

# 提交完后 铲除dist 保持干净
cd -
rm -rf $dist_path