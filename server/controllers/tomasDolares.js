const model = require("../models/totalTomasDolares");


function sumarTomasDolares (req, res) {
    model.totalTomasDolares(req.body.nombre)//mandamos a las base datos lo que hemos metido por fomulario
    .then( result => {
      console.log("resultados " + JSON.stringify(result));
            console.log("nombre: " + req.body.nombre);
              res.send({
                code: 'ok',
                data: {
                  'message' : {text: 'sumado', type: 'info'},
                  'tomasDolares': JSON.stringify(result),
                 
                }
              });console.log(tomasDolares)
    },(error)=>{
      res.send({code:'E3', data:'Datos no enviados'});
      console.log(error);
      
   })
    .catch( err => {
      console.log("fracaso2" + err);
      res.send({
        code: 'error',
        data: err,
      });
    })
}
 
module.exports = {
    sumarTomasDolares
}