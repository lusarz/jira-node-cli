# JIRA CLI &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Interesting%20JIRA%20Command%20Line%20Interface%20written%20in%20node&url=https://github.com/lusarz/jira-node-cli&hashtags=jira,cli,node)

    Usage: jira [options] [command]

    Options:

      -h, --help                output usage information

    Commands:

      issue-link [issueName]    Copy issue link to clipboard
      issue-status [issueName]  Show issue status
      issue [issueName]         Show issue details
      jql [jql]                 Show issues using JQL
      all                       Show all issues
      my-not-released           Show my not released issues
      my-stage                  Show my deployed to stage issues
      sprint                    Show current sprint issues
      stage                     Show all deployed to stage issues

![jira-all](https://user-images.githubusercontent.com/10059264/37196314-a3a24e6a-2376-11e8-8711-5de5a1f353d0.png)

![jira-issue](https://user-images.githubusercontent.com/10059264/37196325-b12e75c2-2376-11e8-9e20-4dcdbacde2cc.png)
                                                                                                                                                               	.
## Install

    npm install -g jira-node-cli
    

## Usage

Type:

    jira
    
and you will be asked about credentials to your JIRA account. Credentials will be saved in `~/.jirarc` file.
