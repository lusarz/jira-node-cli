const MyStageAlias = require('../../lib/aliases/my-stage');

describe('jira my-stage', () => {
  it(`alias to: jira jql 'status in ('Deployed to Stage') AND assignee in (currentUser()) ORDER BY status ASC'`, () => {
    expect(MyStageAlias).to.deep.equal({
      actionName: 'jql',
      name: 'my-stage',
      propsData: {
        jql: `status in ('Deployed to Stage') AND assignee in (currentUser()) ORDER BY status ASC`
      }
    });
  });
});
