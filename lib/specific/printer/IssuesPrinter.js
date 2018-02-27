const IssuePrinter = require('./IssuePrinter');

class IssuesPrinter {
  static print ({ issues }) {
    issues.forEach(IssuePrinter.print);
  }
}

module.exports = IssuesPrinter;
