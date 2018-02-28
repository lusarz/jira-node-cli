const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  command: 'issue-status [name]',
  description: 'Show issue status',
  print: IssuesPrinter.printIssueStatus,
  fetch: IssuesDAO.findIssueByName
};
