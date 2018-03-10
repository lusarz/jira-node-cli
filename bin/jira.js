#!/usr/bin/env node

const program = require('commander');
const RequireUtils = require('../lib/utils/RequireUtils');
const ActionUtils = require('../lib/utils/ActionUtils');
const ConfigurationUtils = require('../lib/utils/ConfigurationUtils');
const AliasUtils = require('../lib/utils/AliasUtils');

if (!ConfigurationUtils.configurationFileExists()) {
  ConfigurationUtils
    .promptUserForConfigurationProperties()
    .then(ConfigurationUtils.saveConfiguration)
    .then(runProgram);
} else {
  runProgram();
}

function runProgram () {
  RequireUtils
    .readAvailableActions()
    .forEach(actionName => {
      const action/*: Action*/ = RequireUtils.getAction(actionName);

      program
        .command(ActionUtils.buildCommand(actionName, action.props))
        .description(action.description)
        .action(params =>
          action.fetch(params)
            .then(action.print)
            .catch(err => { console.log(err); })
        );
    });

  RequireUtils
    .readAvailableAliases()
    .forEach(aliasName => {
      const alias/*: Alias*/ = RequireUtils.getAlias(aliasName);
      const action/*: Action*/ = RequireUtils.getAction(alias.actionName);

      program
        .command(aliasName)
        .description(AliasUtils.prepareDescription(alias, action))
        .action(() =>
          action.fetch(AliasUtils.fillParameters(alias, action))
            .then(action.print)
            .catch(err => { console.log(err); })
        );
    });

  program.parse(process.argv);
  if (!program.args.length) {
    program.help();
  }
}
