const fs = require('fs');

function readDir (dir) {
  return fs
    .readdirSync(__dirname + '/../' + dir)
    .map(file => file.replace('.js', ''));
}

module.exports = {
  getAction: name => require('../actions/' + name),
  getAlias: alias => require('../aliases/' + alias),
  readAvailableActions: () => readDir('actions'),
  readAvailableAliases: () => readDir('aliases')
};
