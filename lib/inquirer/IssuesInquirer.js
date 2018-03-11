const Inquirer = require('inquirer');

module.exports = {
  provideIssueParameters (issueTypes) {
    return Inquirer
      .prompt([
        {
          type: 'list',
          name: 'type',
          message: 'Type: ',
          choices: issueTypes.map(issueType => ({ value: issueType.id, name: issueType.name }))
        },{
          type: 'input',
          name: 'name',
          message: 'Name: '
        },{
          type: 'input',
          name: 'description',
          message: 'Description: '
        }])
  }
};
