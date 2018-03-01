module.exports = {
  action: 'jql',
  description: 'Show my not released issues',
  propsData: {
    jql: 'status not in (Released) AND assignee in (currentUser()) ORDER BY status ASC'
  }
};
