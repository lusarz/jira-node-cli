const moment = require('moment');

function formatDateTime (date) {
  return moment(date).format('DD.MM.YYYY, hh:mm:ss');
}

function formatFromNow (date) {
  return moment(date).fromNow();
}

module.exports = {
  formatDateTimeWithFromNow (date) {
    return `${formatDateTime(date)} (${formatFromNow(date)})`;
  }
};
