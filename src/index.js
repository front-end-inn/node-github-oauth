const http = require('http');
const app = require('./app');
http.createServer(app).listen(3000,'0.0.0.0',()=>{ // 3000是端口 0.0.0.0是主机名,0.0.0.0意为任意主机名访问
  console.log('server start at http://localhost:3000'); 
});