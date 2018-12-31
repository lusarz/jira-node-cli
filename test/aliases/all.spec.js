const AllAlias = require('../../lib/aliases/all');

describe('jira all', () => {
  it(`alias to: jira jql ''`, () => {
    expect(AllAlias).to.deep.equal({
      actionName: 'jql',
      name: 'all',
      propsData: {
        jql: ''
      }
    });
  });
});
