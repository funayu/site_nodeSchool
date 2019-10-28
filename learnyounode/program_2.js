const numArr = [];

for (let i = 0; i < process.argv.length - 2; i++) {
  numArr[i] = Number(process.argv[i + 2]);
}

const sum = numArr.reduce((acc, value) => acc + value, 0);

console.log(sum);