const PrintUtils = require('../utils/PrintUtils');
const CommentsPrinter = require('./CommentsPrinter');

function printIssue (issue/*: Issue*/) {
  PrintUtils.printFixedWidth(`[${issue.statusName}]`, issue.statusColor, 20);
  PrintUtils.print(`${issue.key}: ${issue.summary} - ${issue.assignee || 'not assigned'}`, issue.summaryColor);
  PrintUtils.printNewLine();
}

module.exports = {

  printIssues (issues) {
    issues.forEach(printIssue);
  },

  printIssueStatus (issue/*: Issue*/) {
    PrintUtils.printLine(`[${issue.statusName}]`, issue.statusColor);
  },

  printIssueDetails (issue/*: IssueDetails*/) {
    PrintUtils.printLine(issue.key + ': ' + issue.summary);
    PrintUtils.printLine(`[${issue.statusName}]`, issue.statusColor);
    PrintUtils.printField('Comments', issue.commentsCount, 'green');
    CommentsPrinter.printComments(issue.comments);
  }
};
