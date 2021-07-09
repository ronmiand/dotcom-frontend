var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.session);
  /*
  if (req.session === undefined || req.session == null) {
    res.redirect('/history');
  }
  */
  const data = {
    title: 'Inicio - DoctCom Money Exchange',
    user: {
      name: 's',
    },
  };
  res.render('home', { title: '', data: data });
});

module.exports = router;
