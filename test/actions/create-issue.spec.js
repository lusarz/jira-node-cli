const CreateIssueAction/*:Action*/ = require('../../lib/actions/create-issue');

const IssuesDAO = require('../../lib/dao/issues-dao');
const ProjectsInquirer = require('../../lib/inquirer/projects-inquirer');
const IssuesInquirer = require('../../lib/inquirer/issues-inquirer');
const PrintUtils = require('../../lib/utils/print-utils');

describe('jira create-issue', () => {
  let sandbox;
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(ProjectsInquirer, 'chooseProject').resolves(6);
    sandbox.stub(IssuesInquirer, 'getIssueParameters').resolves({
      summary: 'Sample summary',
      description: 'Sample description',
      issueTypeId: 16
    });
    sandbox.stub(IssuesDAO, 'createIssue').resolves({ key: 'ABC-16'});
    sandbox.stub(PrintUtils, 'printLine');
    CreateIssueAction.run();
  });

  after(() => { sandbox.restore() });

  it('not require parameters', () => {
    expect(CreateIssueAction.props).to.be.empty;
  });

  it('asks about the project', () => {
    sinon.assert.calledOnce(ProjectsInquirer.chooseProject);
  });

  it('asks about issue type', () => {
    sinon.assert.calledWith(IssuesInquirer.getIssueParameters, 6);
  });

  it('send appropriate data to JIRA server', () => {
    sinon.assert.calledWith(IssuesDAO.createIssue, {
      summary: 'Sample summary',
      description: 'Sample description',
      issueTypeId: 16,
      projectId: 6
    });
  });

  it('print information about created issue', () => {
    sinon.assert.calledWith(PrintUtils.printLine, `Issue 'ABC-16' successfully created`, 'green');
  });
});
