const http = require('http');

const server = http.createServer((req, res) => {
  let path = req.url;
  if (path === '/' || path.toLocaleLowerCase() === '/home') {
    res.end('you are in HOME page 🌞🌞🌞🌞');
  }else if (path.toLocaleLowerCase() === '/about') {
    res.end('you are in ABOUT page 📖📖📖📖📖');
  }else{
    res.end('Erroe:404 page not found ⚠️⚠️⚠️⚠️');
  }
});

server.listen(8000, '127.0.0.1',() => {
  console.log('server has started ▪️▪️▪️▪️▪️▪️▪️▪️')
})