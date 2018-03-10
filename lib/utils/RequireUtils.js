const fs = require('fs');

function readDir (dir) {
  return fs
    .readdirSync(__dirname + '/../' + dir)
    .map(file => file.replace('.js', ''));
}

module.exports = {
  getAction: actionName => {
    const action = require('../actions/' + actionName);
    action.name = actionName;
    return action;
  },
  getAlias: alias => require('../aliases/' + alias),
  readAvailableActions: () => readDir('actions'),
  readAvailableAliases: () => readDir('aliases')
};
