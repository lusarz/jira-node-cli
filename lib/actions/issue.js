module.exports = {
  description: 'Show issue details',
  props: ['issueName'],
  run (issueName) {
    const IssuesDAO = require('../dao/IssuesDAO');
    const IssuesPrinter = require('../printer/IssuesPrinter');

    return IssuesDAO
      .findIssueByName(issueName)
      .then(IssuesPrinter.printIssueDetails);
  }
};
