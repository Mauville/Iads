$person = Get-ChildItem Env:name
$cm = Read-Host -Prompt 'Escribe una descripcion breve de los cambios realizados'
cd..
git add *
git commit -m "$cm by $person"
git push -u origin master
hub pull-request -m "$cm"
git ftp push
