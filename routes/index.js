var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Comp_229 - Home' });
});

/* GET demo page. */
router.get('/demo', function(req, res, next) {
  res.render('index', { title: 'Comp_229 - Demo' }); //changing "title" to anything should be changed to views "title" in index.js
});

router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'aboutme' });
});

router.get('/info', function(req, res, next) {
  res.render('index', { title: 'info' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'services' });
});

//etc etc....

module.exports = router;
