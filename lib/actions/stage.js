const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  command: 'stage',
  description: 'Show all deployed to stage issues',
  print: IssuesPrinter.printIssuesWithAssignee,
  fetch: IssuesDAO.findDeployedToStageIssues
};
