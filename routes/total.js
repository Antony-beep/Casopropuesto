var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('total');
  var passedVariable = req.query.valid;
  console.log(passedVariable);
});
router.post('/tototal',function(req,res){
    console.log("todo bien");
    
  });

module.exports = router;