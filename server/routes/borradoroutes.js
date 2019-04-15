var express = require('express');
var router = express.Router();
const borrarcontrollers = require("../controllers/borrarcontrollers");


router.get('/registrar', function(req, res, next) {
    res.render('registrar', { title: 'registrar routes' });
  });
router.post('/', borrarcontrollers.BorrarTarea);

module.exports = router;