module.exports = {
  actionName: 'jql',
  propsData: {
    jql: 'assignee in (currentUser()) ORDER BY status ASC'
  }
};
