module.exports = {
  description: 'Show issue details',
  props: ['issueName'],
  run (issueName) {
    const IssuesDAO = require('../dao/issues-dao');
    const IssuesPrinter = require('../printer/issues-printer');

    return IssuesDAO
      .findIssueByName(issueName)
      .then(IssuesPrinter.printIssueDetails);
  }
};
