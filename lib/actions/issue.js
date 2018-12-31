module.exports = {
  description: 'Show issue details',
  props: ['issueName'],
  async run (issueName) {
    const IssuesDAO = require('../dao/issues-dao');
    const IssuesPrinter = require('../printer/issues-printer');

    const issue = await IssuesDAO.findIssueByName(issueName);
    IssuesPrinter.printIssueDetails(issue);
  }
};
