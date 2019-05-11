const fs = require('fs');
var fs_i_stream = fs.createReadStream('input.txt');
var fs__o_stream = fs.createWriteStream('output.txt');
fs_i_stream.pipe(fs__o_stream);