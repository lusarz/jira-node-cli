const StageAlias = require('../../lib/aliases/stage');

describe('jira stage', () => {
  it(`alias to: jira jql 'status in ('Deployed to Stage') ORDER BY status ASC'`, () => {
    expect(StageAlias).to.deep.equal({
      actionName: 'jql',
      name: 'stage',
      propsData: {
        jql: `status in ('Deployed to Stage') ORDER BY status ASC`
      }
    });
  });
});
