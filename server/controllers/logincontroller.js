const model = require("../models/loginmodels");
const crypt = require ("../util/crypt-util")
const token = require ('../util/token')

function loginWithPost (req, res) {
    model.findByUsername(req.body.uname)// 1 - buscar al usuario en la base de datos
    //buscamos en la base de datos el nombre que le hemos metido por formulario
    .then( result => {
      console.log("resultados " + result);
      if (result.length === 1) {
            var password_db = result[0].contraseña;
            var password_form = req.body.psw;
            var e = crypt.encrypt(password_form);
            console.log("encriptado" + e);
            if (password_db == e) { // 2 - comprobar su password
              res.send({
                code: 'ok',
                data: {
                  'message' : {text: 'logueado', type: 'info'},
                  'name': result[0].nombre ,
                  'edad': result[0].edad,
                  'comoeres': result[0].comoeres,
                  'rol':result[0].rol,
                  'email': result[0].email,
                  'token': token.buildToken(result[0].id)
                  
                }
              })
            }
            else {
                res.send({code:'E2', data: 'contraseña incorrecta'});
            }
      }
      else {
        res.send({code: 'E3', data: 'usuario no encontrado'});
      }
    })
    .catch( err => {
      console.log("el modelo dice que no puede " + err);
      res.send({
        code: 'error',
        data: err,
      });
    })
}
 
module.exports = {
    loginWithPost
}