# JIRA CLI &nbsp; [![Build Status](https://circleci.com/gh/lusarz/jira-node-cli/tree/master.png?style=shield)](https://circleci.com/gh/lusarz/jira-node-cli) &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Interesting%20JIRA%20Command%20Line%20Interface%20written%20in%20node&url=https://github.com/lusarz/jira-node-cli&hashtags=jira,cli,node)

    Usage: jira [options] [command]

    Options:

      -h, --help                output usage information

    Commands:

      create-issue              Create new issue
      issue-link [issueName]    Copy issue link to clipboard
      issue-status [issueName]  Show issue status
      issue [issueName]         Show issue details
      jql [jql]                 Show issues using JQL
      all                       Alias => jira jql ''
      my-issues                 Alias => jira jql 'assignee in (currentUser()) ORDER BY status ASC'
      my-not-released           Alias => jira jql 'status not in (Released) AND assignee in (currentUser()) ORDER BY status ASC'
      my-stage                  Alias => jira jql 'status in ('Deployed to Stage') AND assignee in (currentUser()) ORDER BY status ASC'
      sprint                    Alias => jira jql 'sprint in openSprints() ORDER BY status ASC'
      stage                     Alias => jira jql 'status in ('Deployed to Stage') ORDER BY status ASC'


![jira-all](https://user-images.githubusercontent.com/10059264/37196314-a3a24e6a-2376-11e8-8711-5de5a1f353d0.png)

![jira-issue](https://user-images.githubusercontent.com/10059264/37196325-b12e75c2-2376-11e8-9e20-4dcdbacde2cc.png)


## Tips
Commands like `jira all`, `jira my-not-released` are implemented as [aliases](https://github.com/lusarz/jira-node-cli/blob/master/lib/aliases/my-stage.js). I'm planning to allow user to create his own aliases but currently there is a few hardcoded, so you may meet error like:

    JIRA respond with '400 Bad Request' status.
    ERROR MESSAGE:
    The value 'Released' does not exist for the field 'status'.
    Please try again later
                                                                                                                                                           	
As a workaround please use plain `jira jql` queries, for example:
    
    jira jql 'project=ABC AND status in (New)'
    jira jql 'assignee in (currentUser()) ORDER BY status ASC' 
    jira jql 'project=XYZ AND assignee in (currentUser()) ORDER BY status ASC'                                                                                                                                                       	.


## Install

    npm install -g jira-node-cli
    

## Usage

Type:

    jira
    
and you will be asked about credentials to your JIRA account. Credentials will be saved in `~/.jirarc` file.
