const DAOUtils = require('../utils/DAOUtils');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  command: 'jql [jql]',
  description: 'Show issues using JQL',
  print: IssuesPrinter.printIssues,
  fetch: DAOUtils.fetchIssuesUsingJQL
};
