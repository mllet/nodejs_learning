//解析url需要url模块
const url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))

//解析本地文件目录需要path模块
const path = require('path');
var work_dir = path.resolve('.');
console.log(work_dir);
var file_path = path.join(work_dir, 'pub', 'index.html');
console.log(file_path);
