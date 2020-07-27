const http = require('http');
const app = require('./app');
http.createServer(app).listen(3000,()=>{
  console.log('server start at http://localhost:3000')
});