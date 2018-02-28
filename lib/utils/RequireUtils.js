const fs = require('fs');

module.exports = {
  getAction (name) {
    return require('../actions/' + name);
  },

  readAvailableActions () {
    return fs.readdirSync(__dirname + '/../actions');
  }
};
