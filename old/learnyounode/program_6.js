/** 
 * HTTPでGETを送信して、レスポンスをコンソールに出力する
 * */

// モジュールのインポート
const http = require('http');

const url = process.argv[2];

// 引数で受け取ったURLにGETリクエストを送信する
http.get(url, (response) => {
  response.setEncoding('utf-8');
  response.on('data', (data) => {
    console.log(data);
  });
});


// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

