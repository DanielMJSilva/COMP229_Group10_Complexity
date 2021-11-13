var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Complexity' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Complexity' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/survey', function(req, res, next) {
res.render('survey/survey', { title: 'Survey List' });
});

module.exports = router;