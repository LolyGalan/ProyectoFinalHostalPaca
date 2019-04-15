const db =require('../config/mysql');

function enviarActividades (act){
    return new Promise ((resolve, reject)=>{
        // insert into usuariosh( nombre, contraseña, telefono, rol) values ('Tomas', 'ctsñ2', '622345678', '1');
        let query = "insert into actividades(nombre, dia, tipodesemana, horadeinicio, duracion, descripcion, capacidad, tomasDolar, monitor) values (";
        query = query + "'" + act.nombre + "'";
        query = query + ",'" + act.dia + "'";
        query = query + ",'" + act.tipodesemana + "'";
        query = query + ",'" + act.horadeinicio + "'";
        query = query + ",'" + act.duracion + "'";
        query = query + ",'" + act.descripcion + "'";
        query = query + ",'" + act.capacidad + "'";
        query = query + ",'" + act.tomasDolar + "'";
        query = query + ",'" + act.monitor + "'";
        query = query + ")";
        db.query(
            query,
            (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
    console.log(results + "query")
    });
}

// function enviarActividades(data) {
//     return db.execute(
//         'insert into actividades(nombre, dia, tipodesemana, horadeinicio, duracion, descripcion, capacidad, tomasDolar, monitor) values(?????????)',
//         [name, pass]
//     );
//    }


module.exports = {
    enviarActividades
}
          
