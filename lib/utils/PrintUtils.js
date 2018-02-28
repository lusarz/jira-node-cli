const colors = require('colors/safe');

module.exports = {
  print (text, color = 'white') {
    console.log(colors[color](text));
  },
  printField (label, field, color = 'white') {
    if (field === 0 || field) {
      print(label + ': ' + field, color);
    }
  },
  printNoNewLine (text, color = 'white') {
    process.stdout.write(colors[color](text));
  }
};
