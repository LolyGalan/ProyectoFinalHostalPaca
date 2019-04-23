var express = require('express');
var router = express.Router();
const tomasDolares = require("../controllers/tomasDolares");


router.get('/', function(req, res, next) {
    res.render('tomas', { title: 'Insertar comentarios' });
  });
router.post('/', tomasDolares.sumarTomasDolares);

module.exports = router;