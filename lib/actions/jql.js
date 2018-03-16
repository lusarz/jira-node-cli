module.exports = {
  description: 'Show issues using JQL',
  props: ['jql'],
  run (jql) {
    const IssuesDAO = require('../dao/issues-dao');
    const IssuesPrinter = require('../printer/issues-printer');

    return IssuesDAO
      .fetchIssuesUsingJQL(jql)
      .then(IssuesPrinter.printIssues)
  }
};
