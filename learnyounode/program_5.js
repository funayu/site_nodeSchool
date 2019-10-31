// モジュールの読み込み
const filterFn = require('./mymodule.js');

// 検索対象のフォルダパス
const dir = process.argv[2];
// 検索する拡張子
const filterStr = process.argv[3];

// モジュールの関数を呼び出す
// モジュール側でエラーチェック、フィルタリング処理を実施する
filterFn(dir, filterStr, function (err, list) {
  // 処理の結果、エラーだった場合はコンソールにエラーを出力して処理を終了する
  if (err) {
    return console.error('エラーです！');
  }
  // フィルタ済みリストの内容をコンソールに出力する
  list.forEach((file) => {
    console.log(file);
  });
});