const http = require('http');


//create server
const server = http.createServer((request, response) => {
  console.log('A new request reveive....');
});

//start sever
server.listen(8000, '127.0.0.1',() => {
    console.log('server started....');
});