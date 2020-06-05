var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title : 'Pain'});
});
module.exports = router;
