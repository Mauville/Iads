$person = Get-ChildItem Env:name
$date = Get-Date -Format g

git add *
git commit -m "$person @ $date"
git push -u origin master
git request-pull https://github.com/Mauville/Iads

