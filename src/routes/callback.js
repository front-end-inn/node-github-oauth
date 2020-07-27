const lib = require('../lib/githubOAuth')(require('../config'));
async function handle(req, res) { //啥，async不懂？百度去...
  if (req.query.code) {
    try {
      let { data } = await lib.getToken(req.query.code);   //啥，await不懂？百度去...
      if (!data.error) { //判断code是否过期或已使用
        let token = data['access_token']; //access token 有了
        let r = await lib.getUserInfo(token); // 防止和res或data冲突，此处的r意为response
        //这里之所以不需要判断是否错误，是因为token不会有问题，而且立即发送请求没有过期问题
        req.session.user = r.data.login; //将用户存进session
        req.session.email = r.data.email; //将用户邮箱存进session
        req.session.avatar = r.data.avatar_url; //将用户头像存入session
        req.session.save(() => {
          res.redirect(302, '/login'); //成功获取
        })
      } else {
        res.redirect(302, 'login'); // code过期或已使用
      }
    } catch (e) { //异常捕获（由于某Firewall）
      res.redirect(302, '/login');
    }
  } else {
    res.redirect(302, '/login'); //没有code返回登录
  }
}
module.exports = handle;