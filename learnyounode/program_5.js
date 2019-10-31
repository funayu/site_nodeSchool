const filterFn = require('./mymodule.js');

const dir = process.argv[2];
const filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('エラーです！');
  }

  list.forEach(function (file) {
    console.log(file);
  });
});