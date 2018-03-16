// It's done this way to prevent read from .jirarc in unit test
module.exports = require('./utils/configuration-utils').readConfiguration();
