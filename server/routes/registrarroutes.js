var express = require('express');
var router = express.Router();
const registrarcontroller = require("../controllers/registrarcontroller");


router.get('/', function(req, res, next) {
    res.render('registrar', { title: 'registrar usuarios' });
  });
router.post('/', registrarcontroller.registrarUser);

module.exports = router;