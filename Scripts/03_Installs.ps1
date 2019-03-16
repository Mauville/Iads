choco install git -y
cd $Env:ChocolateyInstall
cd git
curl https://raw.githubusercontent.com/git-ftp/git-ftp/master/git-ftp > /bin/git-ftp
chmod 755 /bin/git-ftp
[Environment]::SetEnvironmentVariable("name", "[YOURNAMEHERE]", "User")
Restart-Computer
