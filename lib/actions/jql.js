module.exports = {
  description: 'Show issues using JQL',
  props: ['jql'],
  run (jql) {
    const IssuesDAO = require('../dao/IssuesDAO');
    const IssuesPrinter = require('../printer/IssuesPrinter');

    return IssuesDAO
      .fetchIssuesUsingJQL(jql)
      .then(IssuesPrinter.printIssues)
  }
};
