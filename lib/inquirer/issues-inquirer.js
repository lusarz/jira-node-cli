const prompt = require('inquirer').prompt;
const IssueTypesDAO = require('../dao/issue-types-dao');

module.exports = {
  async getIssueParameters (projectId) {
    const issueTypes = await IssueTypesDAO.getIssueTypesExcludingSubtasks(projectId);
    return prompt([{
      type: 'list',
      name: 'issueTypeId',
      message: 'Type: ',
      choices: issueTypes.map(issueType => ({ value: issueType.id, name: issueType.name }))
    }, {
      type: 'input',
      name: 'summary',
      message: 'Name: '
    }, {
      type: 'input',
      name: 'description',
      message: 'Description: '
    }]);
  }
};
