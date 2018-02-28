## About
Simple jira command line interface. 

It contains specific actions that I use in everyday work, so it may be not useful currently for everyone. Although I'm open for suggestion that would allow me to make this tool more comprehensive
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
