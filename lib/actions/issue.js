const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  description: 'Show issue details',
  props: ['issueName'],
  print: IssuesPrinter.printIssueDetails,
  fetch: IssuesDAO.findIssueByName
};
