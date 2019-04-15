const model = require("../models/enviarActiv");


function pasarParaEnviar (req, res) {
  const data = req.body;
  console.log(data);
    model.enviarActividades(data)
    .then((result)=> {
              res.send({
                code: 'ok',
                data: {
                  'nombre': result.nombre,
                  'dia': result.dia,
                  'tipodesemana':result.tipodesemana,
                  'horadeinicio': result.horadeinicio,
                  'duracion':result.duracion,
                  'descripcion':result.descripcion,
                  'capacidad':result.capacidad,
                  'tomasDolar':result.tomasDolar,
                  'monitor':result.monitor,
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
    pasarParaEnviar
}
 
