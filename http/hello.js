const http = require('http');
var server = http.createServer(function (request, response) {
  console.log(request.method + ':' + request.url);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello World!</h1>')
});
server.listen(8080);
console.log('server is running at 8080');
