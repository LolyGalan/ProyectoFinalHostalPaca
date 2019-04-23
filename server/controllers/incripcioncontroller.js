const model = require("../models/inscribirUser");


function Inscripcion (req, res) {
    model.inscribirUser({
        id_user: req.userId,
        id_actividad: req.body.idTarea
    })
    
    .then( result => {
      console.log("resultados " + JSON.stringify(result));
      if (result) {
            console.log("inscritooooo");
              res.send({
                code: 'ok',
                data: {
                  'message' : {text: 'inscrito', type: 'info'},
                  'id_actividad': req.body.idTarea,
                  'id_user': req.userId       
                }
            })
            
      }else {
            res.send({code:'errorI', data: 'contraseña incorrecta'});
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
    Inscripcion
}