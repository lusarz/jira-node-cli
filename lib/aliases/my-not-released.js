module.exports = {
  actionName: 'jql',
  propsData: {
    jql: 'status not in (Released) AND assignee in (currentUser()) ORDER BY status ASC'
  }
};
