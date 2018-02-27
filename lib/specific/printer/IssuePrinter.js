const Printer = require('../../core/printer/index');
const StringUtils = require('../../core/utils/StringUtils');

class IssuePrinter {
  static print (issue) {
    const statusColor = issue.fields.status.statusCategory.colorName.split('-')[0];
    Printer.printNoNewLine(StringUtils.fillWithSpaces(`[${issue.fields.status.name}]`, 20), statusColor);
    Printer.print(issue.key + ': ' + issue.fields.summary);
  }

}

module.exports = IssuePrinter;
