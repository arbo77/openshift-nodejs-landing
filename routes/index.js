var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Openshift',
  	slogan: 'Nyalakan rokok dan mulai bekerja'
  });
});

module.exports = router;
