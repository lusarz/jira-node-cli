module.exports = {
  action: 'jql',
  description: 'Show my deployed to stage issues',
  propsData: {
    jql: `status in ('Deployed to Stage') AND assignee in (currentUser()) ORDER BY status ASC`
  }
};
