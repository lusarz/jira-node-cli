const IssueWithAssigneePrinter = require('./IssueWithAssigneePrinter');

class IssuesWithAssigneePrinter {
  static print ({ issues }) {
    issues.forEach(IssueWithAssigneePrinter.print);
  }
}

module.exports = IssuesWithAssigneePrinter;
