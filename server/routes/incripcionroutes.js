var express = require('express');
var router = express.Router();
const incripcioncontroller = require("../controllers/incripcioncontroller");
const token = require('../util/token');


router.get('/', function(req, res, next) {
  res.render('inscripcion', { title: 'Acceso a la inscripcion' });
});
router.post('/',token.verifyParam, incripcioncontroller.Inscripcion);


module.exports = router;