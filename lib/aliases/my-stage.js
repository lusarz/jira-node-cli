module.exports = {
  actionName: 'jql',
  propsData: {
    jql: `status in ('Deployed to Staging') AND assignee in (currentUser()) ORDER BY status ASC`
  }
};
