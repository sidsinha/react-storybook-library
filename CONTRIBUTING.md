# Contributing to DHX React Projects

## Team Meetings & Communication

We communicate through a channel on [Slack](https://autodesk.slack.com/messages/CCUDS61NK) and daily during Stand Up meetings.

If you'd like to attend the meetings, please contact the email alias or slack channel and the team will forward on an invite.

<a name="feature-requests"></a>
## Feature Requests
Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

<a name="pull-requests"></a>
## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code), otherwise you risk spending a lot of
time working on something that the project's developers might not want to merge
into the project.

Please adhere to the coding conventions used throughout a project (indentation,
accurate comments, etc.) and any other requirements (such as test coverage).

Adhering to the following this process is the best way to get your work
included in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://git.autodesk.com/<your-username>/<dhx-abus-package-name>
   # Navigate to the newly cloned directory
   cd <dhx-abus-package-name>
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://git.autodesk.com/dpe/<dhx-abus-package-name>
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout development
   git pull upstream development
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <feature-branch-name>
   ```

4. Make sure to update, or add to the tests when appropriate. Patches and
   features will not be accepted without tests. Run `npm test` to check that
   all tests pass after you've made changes.

5. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

6. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

7. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

9. If you are asked to amend your changes before they can be merged in, please
   use `git commit --amend` (or rebasing for multi-commit Pull Requests) and
   force push to your remote feature branch. You may also be asked to squash
   commits.

10. If you are asked to squash your commits, then please use `git rebase -i master`. It will ask you to pick your commits - pick the major commits and squash the rest.


<a name="style-guide"></a>
## Style Guide

Please follow the [style guide](https://google.github.io/styleguide/jsguide.html) and adhere the linting requirements.

<a name="issues"></a>
## Issues & Bugs :bug:

Please do not create Bugs in the Git Repository, if you need to report a bug go ahead and create one in one of the Teams JIRA Queues.

<a href="https://beehive.jira.com/browse/UHM">UHM Queue</a>
