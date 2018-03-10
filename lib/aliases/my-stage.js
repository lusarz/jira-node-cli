module.exports = {
  actionName: 'jql',
  propsData: {
    jql: `status in ('Deployed to Stage') AND assignee in (currentUser()) ORDER BY status ASC`
  }
};
