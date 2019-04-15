var express = require('express');
var router = express.Router();
const mostrarcontroller = require("../controllers/mostrarcontroller");


router.get('/mostrar', function(req, res, next) {
    res.render('mostrar', { title: 'mostrar actividades' });
  });
router.post('/', mostrarcontroller.MostrarTareas);

module.exports = router;