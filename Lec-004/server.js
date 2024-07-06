const http = require('http');


//create server
const server = http.createServer((request, response) => {
  console.log('A new request reveive....');
  response.end('Hello World!\n');
});

//start sever
server.listen(8000,() => {
    console.log('server started....');
});