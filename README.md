_initialize the repository_\
prerequisites: ssh keygen and empty repo in github
```bash
git init <localdir> #initialize a repo with the .git directory
touch README.md #create an empty file
git add . #stage the changes from the working tree
git commit -m "initial commit" #first commit
git remote add origin git@github.com:<username>/<localdir>.git #adds the upstream url, must be valid
git branch -u main #set the branch and create if none
git push -u origin main #push the changes to <branch> upstream
```

_commit procedure_\
three areas exist (repo, index/staging area, working tree/directory)
```bash
git status # show the status of the work dir and index, including untracked files
git add # stage the specified files for commit
git restore [--staged] #undo specified changes to the work dir or to the index (with --staged)
git stash [list|show|pop|apply|drop|branch] [-u|a] #changes to work dir and index are saved to and applied from the stash stack, -u includes untracked files, -a includes all including ignored files 
git commit [--amend] #commit the staging area and be ready to push, the --amend option modifies the last commit before push and assigns a new hash
```

_reset or clean changes to the repo/working directory_
```bash 
git log --oneline | grep "initial commit" #to find the hash of initial or other commit message
git reset --[soft|mixed|hard] <HEAD~num|commit-hash> #resets the repo, then index, and finally working tree respectively to a specified commit
git revert <commit-hash> #undo an already pushed commit and preserve its history
git clean -ndxf #--n for dryrun, ommit to clean all directories and files from the working tree
```

_other git commands_
```bash
git status #gets the status of the working tree
git remote -v <alias> #gets the stored remote push/pull urls
git remote remove <alias> #removes the declared upstream urls by alias
git config -l #lists the stored config variables
```