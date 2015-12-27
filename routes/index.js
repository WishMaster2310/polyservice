var express = require('express');
var path = require('path');
var router = express.Router();
var nunjucks = require('nunjucks');
var baseData = require(path.join(__dirname, '../data', 'base.json'));
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { base: baseData });
});

router.get('/__export', function(req, res, next) {
  
	var data = nunjucks.render('index.html', { base: baseData });
	fs.writeFileSync(path.join(__dirname, '../public', 'index.html'), data);
	res.send({})
  //res.render('index', { base: baseData });
});

module.exports = router;
