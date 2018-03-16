#!/usr/bin/env node

const program = require('commander');
const RequireUtils = require('../lib/utils/require-utils');
const ActionUtils = require('../lib/utils/action-utils');
const ConfigurationUtils = require('../lib/utils/configuration-utils');
const AliasUtils = require('../lib/utils/alias-utils');

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
    .forEach(action/*: Action*/ => {
      program
        .command(ActionUtils.buildCommand(action.name, action.props))
        .description(action.description)
        .action(params => action.run(params).catch(console.error));
    });
}

function registerAliases () {
  RequireUtils
    .readAvailableAliases()
    .forEach(({ alias/*: Alias*/, action/*: Action*/ }) => {
      program
        .command(alias.name)
        .description(AliasUtils.prepareDescription(alias, action))
        .action(() => action.run(AliasUtils.fillParameters(alias, action)).catch(console.error));
    });
}

function runProgram() {
  program.parse(process.argv);
  if (!program.args.length) program.help();
}
