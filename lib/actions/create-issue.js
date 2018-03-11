const CreateIssueService = require('../services/CreateIssueService');

module.exports = {
  description: 'Create new issue',
  props: [],
  print: function() {},
  fetch: CreateIssueService.run
};
