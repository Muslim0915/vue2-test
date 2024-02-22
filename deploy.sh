yarn build

cd dist

git init
git add -A
git commit -m "deploy"
git push -f https://github.com/Muslim0915/vue2-test.git

cd ..
