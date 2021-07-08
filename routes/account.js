var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title:  'Cuentas - DotCom Money Exchange',
  }
  res.render('account', { data: data });
});

module.exports = router;
