_initialize the repository_\
prerequisites: ssh keygen and empty repo in github\
*origin* and *main* are the upstream repo and production branch, respectively\
remote and upstream are used interchangably
```bash
git init <localdir> #initialize a repo with the .git directory
touch README.md #create an empty file
git add . #stage the changes from the working tree
git commit -m "initial commit" #first commit
git remote add origin git@github.com:<username>/<localdir>.git #adds the upstream url, must be valid
git branch -u main #set the branch locally and create if none, -u declares the upstream branch
git push -u origin main #push the changes to <branch> upstream
```

_commit procedure_\
three areas exist (repo, index/staging area, working tree/directory)
```bash
git checkout # select the context for the areas above
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

_upstream procedure_\
prerequisite: must commit any local changes
```bash
git pull --rebase origin <branch> #pulls the last state of the (release) branch from upstream, --rebase is used when the working branch is deviated from upstream and tries to apply any local commits on top
git add|rm #for any merged changes
git rebase --continue|abort|skip #continues the rebase if used, or aborts, or skips the commit entirely
git push [-u] origin <branch> #pushes the new changes to remote and -u sets the remote branch
```

_merge requests with git_
```bash
git checkout <into-branch> #select the branch that will be merged into such as main or dev
git pull <upstream> <into-branch> #ensure the desired branch is consistent with upstream
git merge <from-branch> #select the branch that will be merged into the current branch
git push <upstream> <into-branch> #push the changes upstream that were merged
```

_Github CLI pull request (PR)_
```bash
gh pr create --title "Pull Request Title" --body "Detailed description of changes" --base main --head your-feature-branch #initiate the pull request
gh pr [review|checkout] <PR_num> [-a|c|r] [-b|F] #review the pr and allows for checkout, -a approves, -c adds a comment, -r requests a change. Comments: -b for inline, -F for file
```

_other git commands_
```bash
git status #gets the status of the working tree and any merges, particularly if there are any merge conflicts
git remote -v #gets the stored remote upstream urls
git remote remove <upstream> #removes the declared upstream urls by alias
git config -l #lists the stored config variables
```