const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2];
const extName = "." + process.argv[3];

fs.readdir(targetDir, (err, list) => {
  if (err) {
    console.log(err);
  } else {
    list.forEach((value) => {
      if (path.extname(value) === extName) {
        console.log(value);
      }
    })
  }
});
