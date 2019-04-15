var express = require('express');
var router = express.Router();
const loginController = require("../controllers/logincontroller");
const token = require('../util/token');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Acceso a la zona privada' });
});
router.post('/', loginController.loginWithPost);

router.post('/:token/', token.verifyParam, function (req,res){
  console.log("ruta validada");
  res.render('activity', { title: 'Actividades' });
});
router.post('/reg', function(req,res,next){
  res.render('registro', {title: 'Ficha de registro'})
})
module.exports = router;
