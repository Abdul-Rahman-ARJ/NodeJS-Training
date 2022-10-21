var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/text'});
  res.end('Hello World');
}).listen(5000);

console.log('Server listening on:5000');