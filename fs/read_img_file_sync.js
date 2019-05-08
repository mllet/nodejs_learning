const fs = require('fs');
var data = fs.readFileSync("fs_option.png");
console.log(data);
console.log(data.length);
var text = data.toString('binary');//utf-8会破坏数据，听说此方法很慢已被弃用，但是我看api并没有查到被弃用的相关信息
var buf = Buffer.from(text, 'binary');
console.log(buf);
