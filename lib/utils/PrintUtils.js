const colors = require('colors/safe');
const StringUtils = require('../utils/StringUtils');

const PrintUtils = {
  print (text, color = 'white') {
    process.stdout.write(colors[color](text));
  },

  printFixedWidth (text, color, places) {
    PrintUtils.print(StringUtils.fillWithSpaces(text, places), color);
  },

  printLine (text, color) {
    PrintUtils.print(text, color);
    PrintUtils.printNewLine();
  },

  printField (label, field, color = 'white') {
    if (field === 0 || field) {
      PrintUtils.printLine(label + ': ' + field, color);
    }
  },

  printNewLine () {
    process.stdout.write('\n');
  }
};

module.exports = PrintUtils;
