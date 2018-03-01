const DAOUtils = require('../utils/DAOUtils');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  description: 'Show issues using JQL',
  props: ['jql'],
  print: IssuesPrinter.printIssues,
  fetch: DAOUtils.fetchIssuesUsingJQL
};
