const MyNotReleasedAlias = require('../../lib/aliases/my-not-released');

describe('jira my-not-released', () => {
  it(`alias to: jira jql status not in (Released) AND assignee in (currentUser()) ORDER BY status ASC'`, () => {
    expect(MyNotReleasedAlias).to.deep.equal({
      actionName: 'jql',
      name: 'my-not-released',
      propsData: {
        jql: 'status not in (Released) AND assignee in (currentUser()) ORDER BY status ASC'
      }
    });
  });
});
