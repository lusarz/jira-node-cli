const Printer = require('../../core/printer/index');

class IssuePrinter {
  static print (issue) {
    const statusColor = issue.fields.status.statusCategory.colorName.split('-')[0];
    Printer.print(`[${issue.fields.status.name}]`, statusColor);
  }

}

module.exports = IssuePrinter;
