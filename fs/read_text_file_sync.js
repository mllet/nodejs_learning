//同步读取txt文件
const fs = require('fs');
var data = fs.readFileSync('fs_option.txt', 'utf-8');
console.log(data);