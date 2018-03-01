module.exports = {
  action: 'jql',
  description: 'Show all deployed to stage issues',
  propsData: {
    jql: `status in ('Deployed to Stage') ORDER BY status ASC`
  }
};
