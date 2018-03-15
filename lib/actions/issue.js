const IssuesDAO = require('../dao/IssuesDAO');
const IssuesPrinter = require('../printer/IssuesPrinter');

module.exports = {
  description: 'Show issue details',
  props: ['issueName'],
  run (issueName) {
    return IssuesDAO
      .findIssueByName(issueName)
      .then(IssuesPrinter.printIssueDetails);
  }
};
