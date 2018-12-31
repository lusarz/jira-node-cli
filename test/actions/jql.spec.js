const JQLAction/*:Action*/ = require('../../lib/actions/jql');
const IssuesDAO = require('../../lib/dao/issues-dao');
const IssuesPrinter = require('../../lib/printer/issues-printer');

let sandbox;

describe('jira jql', () => {
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(IssuesDAO, 'fetchIssuesUsingJQL').resolves([ { key: 'ABC-1' }, { key: 'ABC-2' } ]);
    sandbox.stub(IssuesPrinter, 'printIssues');
    JQLAction.run('sprint in openSprints() ORDER BY status ASC');
  });

  after(() => { sandbox.restore() });

  it('fetches issues using specified jql', () => {
    sinon.assert.calledWith(IssuesDAO.fetchIssuesUsingJQL, 'sprint in openSprints() ORDER BY status ASC');
  });

  it('issues are printed', () => {
    sinon.assert.calledWith(IssuesPrinter.printIssues, [ { key: 'ABC-1' }, { key: 'ABC-2' } ]);
  });
});
