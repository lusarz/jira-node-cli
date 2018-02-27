const Printer = require('../../core/printer/index');
const StringUtils = require('../../core/utils/StringUtils');

class IssueWithAssigneePrinter {
  static print (issue) {
    const statusColor = issue.fields.status.statusCategory.colorName.split('-')[0];
    Printer.printNoNewLine(StringUtils.fillWithSpaces(`[${issue.fields.status.name}]`, 20), statusColor);

    const assignee = issue.fields.assignee && issue.fields.assignee.key;
    Printer.print(issue.key + ': ' + issue.fields.summary + ' - ' + (assignee || 'not assigned'), assignee ? 'white' : 'green');
  }
}

module.exports = IssueWithAssigneePrinter;
