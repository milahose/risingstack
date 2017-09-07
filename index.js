const http = require('http');

http.createServer((request, response) => {
  console.log('request url:', request.url);
  response.end('Hello World!');
}).listen(3000, (port, err) => {
  if (err) throw err;
  console.log('Listening on port 3000');
});