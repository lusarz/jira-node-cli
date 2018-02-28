## About
Simple JIRA command line interface.

Currently it mainly allow user to fetch issues. I'm open for suggestions how would you like to use this tool, and what kind of features may be interesting for you. Please report them in issues tab.
                                                                                                                                                                                      	.

## Install

    npm install -g https://github.com/lusarz/jira-cli.git
    
## Configure
To configure you need to create `.jirarc` file in your home directory:
    
    touch ~/.jirarc
    
This file should be JSON like:

    {
      "TOKEN": "token-generated-like-below",
      "API_URL": "https://<organization>.atlassian.net"
    }     


To generate authorization token:

    echo -n <user>:<password> | base64

## Usage

Just type:

    jira -h
    
and you will see all available options.    
