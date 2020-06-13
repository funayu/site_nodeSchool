const list = process.argv.filter((value, index) => index >= 2);
const result = list.reduce((prev, current) => Number(prev) + Number(current));
console.log(result);
