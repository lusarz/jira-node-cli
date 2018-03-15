#!/usr/bin/env node

const program = require('commander');
const RequireUtils = require('../lib/utils/RequireUtils');
const ActionUtils = require('../lib/utils/ActionUtils');
const ConfigurationUtils = require('../lib/utils/ConfigurationUtils');
const AliasUtils = require('../lib/utils/AliasUtils');

if (!ConfigurationUtils.configurationFileExists()) {
  ConfigurationUtils.setupConfigurationFile()
} else {
  registerActions();
  registerAliases();
  runProgram();
}

function registerActions () {
  RequireUtils
    .readAvailableActions()
    .forEach(actionName => {
      const action/*: Action*/ = RequireUtils.getAction(actionName);

      program
        .command(ActionUtils.buildCommand(actionName, action.props))
        .description(action.description)
        .action(params => action.run(params).catch(console.error));
    });
}

function registerAliases () {
  RequireUtils
    .readAvailableAliases()
    .forEach(aliasName => {
      const alias/*: Alias*/ = RequireUtils.getAlias(aliasName);
      const action/*: Action*/ = RequireUtils.getAction(alias.actionName);

      program
        .command(aliasName)
        .description(AliasUtils.prepareDescription(alias, action))
        .action(() => action.run(AliasUtils.fillParameters(alias, action)).catch(console.error));
    });
}

function runProgram() {
  program.parse(process.argv);
  if (!program.args.length) program.help();
}
