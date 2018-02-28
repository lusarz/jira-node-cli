const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  command: 'issue [name]',
  description: 'Show issue details',
  print: IssuesPrinter.printIssueDetails,
  fetch: IssuesDAO.findIssueByName
};
