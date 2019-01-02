module.exports = {
  actionName: 'jql',
  propsData: {
    jql: 'status not in (Done, Released) AND assignee in (currentUser()) ORDER BY status ASC'
  }
};
