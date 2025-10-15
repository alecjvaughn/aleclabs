initialize the repository
prerequisites: ssh keygen and empty repo in github
```
git init <localdir>
touch README.md
git add .
git commit -m "initial commit"
git remote add origin git@github.com:<username>/<localdir>.git
git branch -u main
git push -u origin main
```

reset or clean the repo/working directory
``` 
git log --oneline | grep "initial commit" `__#to find the hash of initial or other commit message__`
git reset --soft|mixed|hard <HEAD~\#|commit\#> #resets the repo, then staging, and then working tree respectively
git clean -ndxf #n for dryrun, ommit to clean all directories and files from the working tree
```

other git commands
```
git status #gets the status of the working tree
git remote -v #gets the stored remote push/pull urls
git remote remove #removes the declared upstream urls by alias
git config -l #lists the stored config variables
```