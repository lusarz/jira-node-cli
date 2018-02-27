#Generate authorization token

echo -n { \"TOKEN\": \"`echo -n user:password | base64`\" } > ~/.jirarc

