const fs = require('fs');

function readDir (dir) {
  return fs
    .readdirSync(__dirname + '/../' + dir)
    .map(file => file.replace('.js', ''))
    .map(fileName => readFile(fileName, dir))
}

function readFile (name, directory) {
  return Object.assign(require(`../${directory}/${name}`), { name });
}

function readAction (actionName) {
  return readFile(actionName, 'actions');
}

module.exports = {
  readAvailableActions () {
    return readDir('actions')
  },

  readAvailableAliases () {
    return readDir('aliases').map(alias => ({ alias, action: readAction(alias.actionName) }))
  }
};
