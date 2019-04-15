const model = require("../models/buscatareas");
const model2 =require("../models/contadorInscr");

function MostrarTareas (req, res) {
    model.findByTarea(req.body.dia)// 1 - buscar al usuario en la base de datos
    //buscamos en la base de datos el nombre que le hemos metido por formulario
    .then( result => {
      let tareasQueCumplenElFiltro = [];
      console.log("resultadogggs " + result);
      if (result.length > 0) {
          console.log("tengo:" + result.length);
            for (let i=0; i<result.length ;i++){
                console.log("tarea"+ i);
                model2.contarInscritos(result[i].id)// Cuenta los niños que ya estan inscritos en una actividad
                .then( childreninscritos => {
                  const sitiosDisponibles = result[i].capacidad - childreninscritos[0].cantidad
                  console.log("sitios disponibles"+ sitiosDisponibles);
                  if (sitiosDisponibles >= 1){
                    console.log("sitios sdfsdf "+ sitiosDisponibles);
                    tareasQueCumplenElFiltro.push(result[i]);
                  
                    /*
                        {    
                            'nombre': resultado[i].nombre ,
                            'tipodesemana':resultado[i].tipodesemana,
                            'dia':resultado[i].dia,
                            'horadeinicio': resultado[i].horadeinicio,
                            'duracion':resultado[i].duracion,
                            'descripcion':resultado[i].descripcion,
                            'capacidad':resultado[i].capacidad,
                            'tomasDolar':resultado[i].tomasDolar,
                            'monitor':resultado[i].monitor,
                        }
                      
                    );
                    */
                }
                if (i == result.length - 1 ) {
                  let tareas = JSON.stringify(tareasQueCumplenElFiltro)
                  console.log("tareas  "+ JSON.stringify(tareasQueCumplenElFiltro));
                  res.send(tareas);
                } else {
                  console.log("he comprobado la tarea: " + i + " pero no puedo enviar aún");
                }
            })
          }
    }
    else {
      res.send = {code: 'E1', data: 'No existe tarea con ese nombre'};
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