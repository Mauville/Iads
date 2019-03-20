$branch = Get-Random -Minimum 5000 -Maximum 15000
cd..
git checkout master
git branch $branch
git checkout $branch
