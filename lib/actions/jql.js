module.exports = {
  description: 'Show issues using JQL',
  props: ['jql'],
  async run (jql) {
    const IssuesDAO = require('../dao/issues-dao');
    const IssuesPrinter = require('../printer/issues-printer');

    const issues = await IssuesDAO.fetchIssuesUsingJQL(jql);
    IssuesPrinter.printIssues(issues)
  }
};
