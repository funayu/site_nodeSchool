const fs = require('fs');
const path = require('path');

module.exports = function (targetDir, extName, callback) {
  fs.readdir(targetDir, (err, list) => {
    if (err) {
      return callback(err);
    }

    const data = [];
    list.forEach((value) => {
      if (path.extname(value) === ("." + extName)) {
        data.push(value);
      }
    })
    callback(null, data);

  });
}
