var express = require('express');
var router = express.Router();
var session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title:  'Login - DotCom Money Exchange',
  }
  res.render('login', { data:data });
});

router.post('/', function(req, res, next) {

  if(req.body.user == undefined
    || req.body.user == null
    || req.body.user == ""
    || req.body.password == undefined) {
    const data = {
      title:  'Login Failed - Dotcom DotCom Money Exchange',
      error: {code:1, message: 'Usuario o contraseña invalido'}
    }
    res.render('login', { data:data });
    return;
   }

  console.log("user: " + req.body.user);
  console.log("password: " + req.body.password);

  res.redirect('/home');


 
 
  //res.send("api login");
 
});
module.exports = router;
