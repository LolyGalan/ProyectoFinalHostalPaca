const model = require("../models/buscatareas");


function MostrarTareas (req, res) {
    model.findByTarea(req.body.nombre)// 1 - buscar al usuario en la base de datos
    //buscamos en la base de datos el nombre que le hemos metido por formulario
    .then( result => {
      console.log("resultadogggs " + result);
      if (result.length > 0) {
          console.log("tengo:"+result.length);
            for (let i=0; i<result.length ;i++){
                dia= result[i].dia;
                dia_form= req.body.dia;
                console.log("dia: "+dia);
                console.log("dia_form: "+dia_form);

                if (dia == dia_form){
                  console.log("HOLAAAAAAAAAAA");
                    res.send({
                        code: 'ok',
                        data: {    
                            'nombre': result[i].nombre ,
                            'dia': result[i].dia,
                            'tipodesemana':result[i].tipodesemana,
                            'horadeinicio': result[i].horadeinicio,
                            'duracion':result[i].duracion,
                            'descripcion':result[i].descripcion,
                            'capacidad':result[i].capacidad,
                            'tomasDolar':result[i].tomasDolar,
                            'monitor':result[i].monitor,
                            }
                })
                }
        }
    }
      else {
        res.send({code: 'E1', data: 'No existe tarea con ese nombre'});
      }
    })
    .catch( err => {
      console.log("El modelo  no puede traerse los datos " + err);
      res.send({
        code: 'error',
        data: err,
      });
    })

}
module.exports = {
    MostrarTareas
}