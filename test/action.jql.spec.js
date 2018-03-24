const sinon = require('sinon');

const JQLAction/*:Action*/ = require('../lib/actions/jql');
const IssuesDAO = require('../lib/dao/issues-dao');
const IssuesPrinter = require('../lib/printer/issues-printer');

let sandbox;

describe('When user invoke jql action', () => {
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(IssuesDAO, 'fetchIssuesUsingJQL').resolves([ { key: 'ABC-1' }, { key: 'ABC-2' } ]);
    sandbox.spy(IssuesPrinter, 'printIssues');
    JQLAction.run('sprint in openSprints() ORDER BY status ASC');
  });

  after(() => { sandbox.restore() });

  it('issues should fetched using specified jql', () => {
    sinon.assert.calledWith(IssuesDAO.fetchIssuesUsingJQL, 'sprint in openSprints() ORDER BY status ASC');
  });

  it('issues should be printed', () => {
    sinon.assert.calledWith(IssuesPrinter.printIssues, [ { key: 'ABC-1' }, { key: 'ABC-2' } ]);
  });
});
