const IssueAction/*:Action*/ = require('../../lib/actions/issue');
const IssuesDAO = require('../../lib/dao/issues-dao');
const IssuesPrinter = require('../../lib/printer/issues-printer');

let sandbox;

describe('jira issue', () => {
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(IssuesDAO, 'findIssueByName').resolves({
      key: 'ABC-1',
      summary: 'Initialize project',
      statusName: 'New',
      statusColor: 'red',
      comments: []
    });
    sandbox.stub(IssuesPrinter, 'printIssueDetails');
    IssueAction.run('ABC-1');
  });

  after(() => { sandbox.restore() });

  it('fetches issue data', () => {
    sinon.assert.calledWith(IssuesDAO.findIssueByName, 'ABC-1');
  });

  it('print issue details', () => {
    sinon.assert.calledWith(IssuesPrinter.printIssueDetails, {
      key: 'ABC-1',
      summary: 'Initialize project',
      statusName: 'New',
      statusColor: 'red',
      comments: []
    });
  });
});
