const fs = require('fs');
const path = require('path');

// モジュール内に関数を一つ定義する
module.exports = function (dir, filterStr, callback) {
  // フォルダ内のファイル名のリストを取得する
  fs.readdir(dir, function (err, list) {
    // エラーが発生した場合、コールバックにエラーを返す
    if (err) {
      return callback(err);
    }

    // ファイル名が引数の拡張子と同じものでフィルタして、新しい配列に入れる
    const resultArr = list.filter((file) => {
      return path.extname(file) === '.' + filterStr;
    });
    // リストを返す
    callback(null, resultArr);
  });
};