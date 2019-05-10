const fs = require('fs');
var r_stream = fs.createReadStream("fs_stream.txt",'utf8');
r_stream.on('data', function (chunk) {
  console.log(chunk)
});
r_stream.on('end', function () {
  console.log("end")
});
r_stream.on('error', function (err) {
  console.log(err)
});