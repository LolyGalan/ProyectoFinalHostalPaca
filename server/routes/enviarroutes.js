var express = require('express');
var router = express.Router();
const enviarActivcontroller = require("../controllers/enviarActivcontroller");


router.get('/enviar', function(req, res, next) {
    res.render('enviar', { title: 'envío de actividades' });
  });
router.post('/', enviarActivcontroller.pasarParaEnviar);

module.exports = router;


