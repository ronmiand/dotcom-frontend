var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('operation', { title: 'Operación' });
});

router.get('/:step', function(req, res, next) {
    res.render('operation', { title: 'Operación', step: req.params.step });
  });

  router.post('/:step/:id', function(req, res, next) {
    res.render('operation', { title: 'Operación', step: req.params.step, id: req.params.id });
  });

module.exports = router;
