var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/topage2',function(req,res){
  let lenguaje = req.body.lenguajeres;
  console.log(lenguaje);
  res.redirect('/page2');
  
});

module.exports = router;
