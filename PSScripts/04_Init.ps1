cd $Env:Programfiles\Git
curl https://raw.githubusercontent.com/git-ftp/git-ftp/master/git-ftp > bin/git-ftp
chmod 755 bin/git-ftp
[Environment]::SetEnvironmentVariable("name", "[YOURNAMEHERE]", "User")
refreshenv


git config --global user.name "YOURUSERNAMEHERE"
git config --global user.email "YOUREMAILHERE"


$DesktopPath = [Environment]::GetFolderPath("Desktop")
mkdir $DesktopPath\IADS
cd $DesktopPath\IADS

hub clone Mauville/iads
hub fork -remote-name=origin
git remote add upstream https://github.com/Mauville/Iads.git

git config git-ftp.user "iads@uxp.mx"
git config git-ftp.url "ftp://uxp.mx:21/iads"
git config git-ftp.password "cNt5%`$ku"