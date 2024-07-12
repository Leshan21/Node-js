const http = require('http');
const fs = require('fs');
const express = require('express'); 
const path = require('path'); 

const app = express()

const html = fs.readFileSync('./index.html', 'utf-8');
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer((request, response) => {
  response.end(html);
});

server.listen(8000,() => {
  console.log('server started▪️▪️▪️▪️▪️▪️▪️▪️');
})