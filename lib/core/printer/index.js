const colors = require('colors/safe');

function printNoNewLine (text, color = 'white') {
  process.stdout.write(colors[color](text));
}

function print (text, color = 'white') {
  console.log(colors[color](text));
}

function printField (label, field, color = 'white') {
  if (field === 0 || field) {
    print(label + ': ' + field, color);
  }
}

function printLineBreak () {
  print('\n');
}

module.exports = {
  print,
  printField,
  printLineBreak,
  printNoNewLine
};
