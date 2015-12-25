var express = require('express');
var path = require('path');
var router = express.Router();

var baseData = require(path.join(__dirname, '../data', 'base.json'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { base: baseData });
});

module.exports = router;
