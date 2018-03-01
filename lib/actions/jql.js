const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  description: 'Show issues using JQL',
  props: ['jql'],
  print: IssuesPrinter.printIssues,
  fetch: IssuesDAO.fetchIssuesUsingJQL
};
