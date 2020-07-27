const URI = require('../lib/githubOAuth')(require('../config')).redirectUrl;
module.exports = (req,res)=>{
  if(req.session.user){   //已登录，无需再次oauth
    res.send(`<h3>username: ${req.session.user}</h3><h3>email: ${req.session.email}</h3><img src="${req.session.avatar}">`);
  }else{
    res.redirect(302,URI);
  }
}