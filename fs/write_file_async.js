const fs = require('fs');
var data = 'hello,node.js!';
fs.writeFile('fs_option.txt', data, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});