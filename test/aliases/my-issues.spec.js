const MyIssuesAlias = require('../../lib/aliases/my-issues');

describe('jira my-issues', () => {
  it(`alias to: jira jql 'assignee in (currentUser()) ORDER BY status ASC'`, () => {
    expect(MyIssuesAlias).to.deep.equal({
      actionName: 'jql',
      name: 'my-issues',
      propsData: {
        jql: 'assignee in (currentUser()) ORDER BY status ASC'
      }
    });
  });
});
