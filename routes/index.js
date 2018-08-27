var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/prices', function(req, res, next) {
  var json_info = [
  	{A:[{year:2010,amt:124},{year:2011,amt:120}]},
  	{B:[{year:2010,amt:10},{year:2011,amt:120}]},
  	{C:[{year:2010,amt:133},{year:2012,amt:120}]},
  	{D:[{year:2010,amt:120},{year:2013,amt:120}]},
  ];

 

  res.status(200).json(json_info);

});

module.exports = router;
