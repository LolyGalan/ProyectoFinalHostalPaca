var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hostal Paca' });
});
router.post('/reg', function(req,res,next){
  res.render('registro', {title: 'Ficha de registro'})
})
module.exports = router;
 