const router = require('express').Router(); //分离router,方便分割代码
const login = require('./routes/login');
const callback = require('./routes/callback');
router.use('/login',login); // login 
router.use('/callback',callback); // callback
module.exports = router;