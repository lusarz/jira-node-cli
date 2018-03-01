const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  description: 'Show issue status',
  props: ['issueName'],
  print: IssuesPrinter.printIssueStatus,
  fetch: IssuesDAO.findIssueByName
};
