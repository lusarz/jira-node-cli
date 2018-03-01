module.exports = {
  action: 'jql',
  description: 'Show current sprint issues',
  propsData: {
    jql: 'sprint in openSprints() ORDER BY status ASC'
  }
};
