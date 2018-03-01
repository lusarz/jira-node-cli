module.exports = {
  action: 'jql',
  description: 'Show current sprint issues',
  propsData: {
    jql: `project=REF AND sprint in openSprints() ORDER BY status ASC` // TODO: project is hardcoded here to meet my needs
  }
};
