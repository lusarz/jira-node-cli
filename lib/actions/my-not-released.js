const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  command: 'my-not-released',
  description: 'Show my not released issues',
  print: IssuesPrinter.printIssuesWithAssignee,
  fetch: IssuesDAO.findMyNotReleasedIssues
};
