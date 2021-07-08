var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title:  'Inicio - DotCom Money Exchange',
  }
  res.render('register', { data: data });
});

module.exports = router;
