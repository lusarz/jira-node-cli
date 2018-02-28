const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  command: 'my-stage',
  description: 'Show my deployed to stage issues',
  print: IssuesPrinter.printIssuesWithAssignee,
  fetch: IssuesDAO.findMyDeployedToStageIssues
};
