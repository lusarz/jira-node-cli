const JSONUtils = require('jsonfile');
const path = require('path');


module.exports = {
  readConfiguration () {
    return JSONUtils.readFileSync(path.join(process.env.HOME, '.jirarc'));
  }
};
