const http = require('http');

http.get(process.argv[2], function (res) {
  let collectData = "";

  res.setEncoding("utf-8");
  res.on("data", function (data) {
    collectData += data;
  })
  res.on("end", function () {
    console.log(collectData.length);
    console.log(collectData);
  })
})
