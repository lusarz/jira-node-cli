#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');

function registerAction (action) {

  const fn = params => {
    new action(params).run();
  };

  program
    .command(action.COMMAND)
    .description(action.DESCRIPTION)
    .action(fn)
}

fs
  .readdirSync(__dirname + '/../lib/specific/actions')
  .forEach(file => {
    registerAction(require('../lib/specific/actions/' + file.replace('.js', '')));
  });

program.parse(process.argv);
