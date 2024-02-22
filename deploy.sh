yarn build

cd dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:Muslim0915/Muslim0915.github.io.git master

cd ..
