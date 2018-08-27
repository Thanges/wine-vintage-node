var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/prices', function(req, res, next) {

	var json_info = [{name:'test'}]
  res.status(500).json(json_info);

});

module.exports = router;
