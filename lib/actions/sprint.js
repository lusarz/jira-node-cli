const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  command: 'sprint',
  description: 'Show current sprint issues',
  print: IssuesPrinter.printIssuesWithAssignee,
  fetch: IssuesDAO.findCurrentSprintIssues
};
