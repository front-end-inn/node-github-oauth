const express = require('express');
const session = require('express-session');
const main = require('./router');
let app = express();
app.use(session({
  name: 'login', //session的名字(cookies的名字)
  secret: 'secret', //secret密钥，防止泄露数据
  saveUninitialized:false,
  resave: true, //自动保存(当req.session修改时自动保存);
  cookie: { //cookies设置
    maxAge: 60 * 1000 * 20 //cookies过期时间
  }
}));

app.use(main);
module.exports = app;