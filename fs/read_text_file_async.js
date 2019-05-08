//异步读取文件夹
const fs = require('fs');
var data = fs.readFile("fs_option.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
});