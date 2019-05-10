const fs = require('fs');
var w_stream = fs.createWriteStream('fs_stream.txt', 'utf8');
w_stream.write("test-使用stream写入文本数据！\n");
w_stream.end();
var w_stream = fs.createWriteStream('fs_stream.txt');
w_stream.write(new Buffer("test-使用stream写入二进制数据！\n"));
w_stream.end();
console.log(new Buffer("test-使用stream写入二进制数据！\n",'utf8'));