const model = require("../models/insertarcoments");


function comentar (req, res) {
    model.insertarComent(req.body)//mandamos a las base datos lo que hemos metido por fomulario
    .then( result => {
      console.log("resultados " + result);
            console.log("nombre: " + req.body.nombre);
              res.send({
                code: 'ok',
                data: {
                  'message' : {text: 'comentado', type: 'info'},
                  'nombre': result.nombre,
                  'coment':result.coment
                }
              })
    },(error)=>{
      res.send({code:'E3', data:'Datos no enviados'});
      console.log(error);
      
   })
    .catch( err => {
      console.log("fracaso" + err);
      res.send({
        code: 'error',
        data: err,
      });
    })
}
 
module.exports = {
    comentar
}