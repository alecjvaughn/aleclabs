_create firecms app_\
```bash
yarn create firecms-app # Must create in empty directory
    # FireCMS Community
    # select Firebase project (aleclabs-website)
    # choose defaults (root: my-cms, no git init)
cd my-cms # default root dir
echo .yarn > .gitignore # safe to commit
yarn add firebase@^10 @firecms/core@^3.0.0-rc.3 @firecms/firebase@^3.0.0-rc.3 @firecms/ui@^3.0.0-rc.3 @firecms/editor@^3.0.0-rc.3 react-router@^6 react-router-dom@^6 @tailwindcss/typography typeface-rubik @fontsource/jetbrains-mono 
    # install deps for FireCMS Community and Next.js frontend (Quickstart)^^^
    #
    # for FireCMS PRO + Next.js frontend
    # ? Please choose a version of "@firecms/collection_editor" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/collection_editor_firebase" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/core" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/data_enhancement" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/data_export" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/data_import" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/editor" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/firebase" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/schema_inference" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/ui" from this list: 3.0.0-rc.3
    # ? Please choose a version of "@firecms/user_management" from this list: 3.0.0-rc.3
yarn dev # test locally
firebase init #makes this a firebase project, connects to a backend app, and optionally to github for triggered deployments
    # adds .firebaserc, .gitignore, apphosting.yaml, and firebase.json
firebase emulators:start # perform a local test of firebase
npx create-next-app@latest # git rm -r on ./public and ./src and recreate src (app should be installed in empty src directory)
# These files were removed:
    # my-cms/public/
    # my-cms/src/
# Merge dependencies and re-build
    # merge resulting ./src/package.json with root package.json and remove any *.lock files, finally rerun yarn
    # .next and node_modules should also be removed from the ./src directory and regenerated in the root directory
    # merge the inner .gitignore with the root .gitignore
# These files were modified:
    # modified:   my-cms/.gitignore
    # modified:   my-cms/package.json
    # modified:   my-cms/tailwind.config.js
    # modified:   my-cms/tsconfig.json
    # modified:   my-cms/yarn.lock
```

_deploy firebase project_\
prerequisites: jdk (e.g. oracle jdk 25) required for local emulation
```bash
firebase emulators:start #perform a local test
firebase deploy #deploys a release from the live backend
```

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
git branch -u main #set the branch locally and create if none, -u declares that it is tracked by upstream (push/pull is synchronized)
git push -u origin main #push the changes to <branch> upstream (-u sets up a tracking branch on remote of the same name if none exists)
```

_git checkpoints_\
```bash
c4fd6747 (main) initial commit
ee65326f (HEAD -> cms, origin/cms) firebase init on firecms base project -- working
```

_commit procedure_\
three areas exist (repo, index/staging area, working tree/directory)
```bash
git checkout # select the context for the areas above
git status # show the status of the work dir and index, including untracked files
git add # stage the specified files for commit
git rm [-r] # remove files and folders (from tracking)
git restore [--staged] #undo specified changes to the work dir or to the index (with --staged)
git stash [list|show|pop|apply|drop|branch] [-u|a] #changes to work dir and index are saved to and applied from the stash stack, -u includes untracked files, -a includes all including ignored files 
git commit [--amend] #commit the staging area and be ready to push, the --amend option modifies the last commit before push and assigns a new hash
```

_reset or clean changes to the repo/working directory_
```bash 
git log --oneline | grep "initial commit" #to find the hash of initial or other commit message
git reset --[soft|mixed|hard] <HEAD~num|commit-hash> #resets the repo, then index (commit history), and finally working tree respectively to a specified commit
git revert <commit-hash> #undo an already pushed commit and preserve its history
git clean -ndxf #--n for dryrun, ommit to clean untracked directories and files from the working tree
```

>If you want to remove the "bad" commit altogether (and every commit that came after that), do a `git reset --hard ABC` (assuming ABC is the hash of the "bad" commit's elder sibling — the one you want to see as the new head commit of that branch). Then do a `git push --force` (or `git push -f`).
>
>If you just want to edit that commit, and preserve the commits that came after it, do a `git rebase -i ABC~`. This will launch your editor, showing the list of your commits, starting with the offending one. Change the flag from "pick" to "e", save the file and close the editor. Then make the necessary changes to the files, and do a `git commit -a --amend`, then do `git rebase --continue`. Follow it all up with a git push -f.
>[stackoverflow](https://stackoverflow.com/questions/30893040/remove-commit-from-history)

>[Removing sensitive data from a repository
 - Github Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

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
git checkout [-b] <into-branch> #select the branch that will be merged into such as main or dev, -b allows for creation of new branch
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
git status #gets the status of the working tree and any merges, particularly if there are any merge conflicts. To manually resolve, remove the conflict markers--preserving the desired changes, stage, and finally commit the merged changes
git remote -v #gets the stored remote upstream urls
git remote remove <upstream> #removes the declared upstream urls by alias
git config -l #lists the stored config variables
```