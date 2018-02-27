const Printer = require('../printer');

class AbstractAction {
  constructor (printer) {
    if (printer) this.printer = require('../../specific/printer/' + printer);
  }

  run () {
    this
      .fetch()
      .then(data =>  { if (this.printer) this.printer.print(data); })
      .catch(err => {
        Printer.print(err, 'red');
      });
  }

  fetch () {
    throw new Error('NOT IMPLEMENTED');
  }
}

module.exports = AbstractAction;
