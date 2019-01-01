const open = require('opener');

function openUrl (url) {
  return new Promise((resolve, reject) => {
    open(url, {}, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  });
}

module.exports = {
  openUrl
};
