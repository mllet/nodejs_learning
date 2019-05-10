const fs = require('fs');
fs.stat('fs_option.txt', function (err, stat) {
  if (err) {
    console.log(err);
  } else {
    console.log(stat);
  }
});