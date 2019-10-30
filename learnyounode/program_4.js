const fs = require('fs');
const path = require('path');

// 対象のディレクトリ
const dir = process.argv[2];

// 対象の拡張子
const ext = process.argv[3];

fs.readdir(dir, (err, list) => {
  // 対象の拡張子のファイルのみのリストを作成する
  const resultArr = list.filter(value => path.extname(value) === `.${ext}`);

  resultArr.forEach(value => {
    console.log(value);
  });

});


// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })

