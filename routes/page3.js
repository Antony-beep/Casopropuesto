var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page3');
  var passedVariable = req.query.valid;
  console.log(passedVariable);
});
router.post('/tototal',function(req,res){
    
    res.redirect('/total');
    
  });

module.exports = router;