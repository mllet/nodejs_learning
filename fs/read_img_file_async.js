//异步读取二进制文件
const fs = require('fs');
fs.readFile('fs_option.png', function (err, data) {
  if(err){
    console.log(err);
  }else {
    console.log(data)
  }
});