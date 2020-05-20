var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page2');
  var passedVariable = req.query.valid;
  console.log(passedVariable);
});
router.post('/topage3',function(req,res){
    
    res.redirect('/page3');
    
  });

module.exports = router;