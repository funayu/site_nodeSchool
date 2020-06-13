const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const bufferToText = buffer.toString();
const arr = bufferToText.split("\n");
console.log(arr.length - 1);
