const model = require("../models/insertarUser");

function registrarUser (req, res) {
    const miPromesaDeResultados = model.insertarUser(req.body);
    console.log(req.body);
    miPromesaDeResultados.then( result => {
      console.log(result)
              res.send({
                code: 'ok',
                data: {
                  'nombre': result.nombre ,
                  'contraseña': result.contraseña,
                  'edad':result.edad,
                  'comoeres': result.comoeres,
                  'email':result.email,
                  'rol':"0"
                }
              })
    }, (error)=>{
      res.send({code:'E1', data:'Datos no enviados'});
      console.log(error);
    })
      
    .catch( err => {
      res.send({
        code: 'error',
        data: err,
      });
    })
}
module.exports = {
    registrarUser
}