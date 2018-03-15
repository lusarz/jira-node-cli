const colors = require('colors/safe');
const StringUtils = require('../utils/StringUtils');

const PrintUtils = {
  print (text, color) {
    process.stdout.write(color ? colors[color](text) : text);
  },

  printFixedWidth (text, color, places) {
    PrintUtils.print(StringUtils.fillWithSpaces(text, places), color);
  },

  printLine (text, color) {
    PrintUtils.print(text, color);
    PrintUtils.printNewLine();
  },

  printField (label, field, color) {
    if (field === 0 || field) {
      PrintUtils.printLine(label + ': ' + field, color);
    }
  },

  printJSON (object, color) {
    PrintUtils.printLine(JSON.stringify(object, null, 2), color);
  },

  printNewLine () {
    process.stdout.write('\n');
  }
};

module.exports = PrintUtils;
