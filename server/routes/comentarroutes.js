var express = require('express');
var router = express.Router();
const comentarcontroller = require("../controllers/comentarcontroller");


router.get('/', function(req, res, next) {
    res.render('comentar', { title: 'Insertar comentarios' });
  });
router.post('/', comentarcontroller.comentar);

module.exports = router;