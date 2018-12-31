const SprintAlias = require('../../lib/aliases/sprint');

describe('jira sprint', () => {
  it(`alias to: jira jql 'sprint in openSprints() ORDER BY status ASC'`, () => {
    expect(SprintAlias).to.deep.equal({
      actionName: 'jql',
      name: 'sprint',
      propsData: {
        jql: 'sprint in openSprints() ORDER BY status ASC'
      }
    });
  });
});
