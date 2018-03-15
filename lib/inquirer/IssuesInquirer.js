const prompt = require('inquirer').prompt;
const IssueTypesDAO = require('../dao/IssueTypesDAO');

module.exports = {
  getIssueParameters (projectId) {
    return IssueTypesDAO.getIssueTypesExcludingSubtasks(projectId)
      .then(issueTypes => prompt([
        {
          type: 'list',
          name: 'issueTypeId',
          message: 'Type: ',
          choices: issueTypes.map(issueType => ({ value: issueType.id, name: issueType.name }))
        },{
          type: 'input',
          name: 'summary',
          message: 'Name: '
        },{
          type: 'input',
          name: 'description',
          message: 'Description: '
        }
      ]))
      .then(answers => Object.assign(answers, { projectId }));
  }
};
