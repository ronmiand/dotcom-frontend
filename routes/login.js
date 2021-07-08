var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title:  'Login - DotCom Money Exchange',
  }
  res.render('login', { data:data });
});

module.exports = router;
