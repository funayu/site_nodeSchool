const fs = require('fs');

// ファイルを読み込む
let content = fs.readFileSync(process.argv[2], "utf-8");

// ファイルをバッファオブジェクトからStringオブジェクトに変換する
content = content.toString();

// 改行コードで区切って配列に入れる
const array = content.split("\n");

// 配列の数　- 1　が改行コードの数
const kaigyoNum = array.length - 1;

console.log(kaigyoNum);



// 正式な回答
// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)

    // 注：'readFileSync' の二つ目の引数に 'utf8' を渡すと、
    // '.toString' を使わずに文字列を受け取ることが出来ます！
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
