const db =require('../config/mysql');

function inscribirUser (i){
    return new Promise ((resolve, reject)=>{
        console.log("data to model: " + JSON.stringify(i));
        // insert into usuariosh( nombre, contraseña, telefono, rol) values ('Tomas', 'ctsñ2', '622345678', '1');
        let query = "insert into user_activity(id_actividad, id_user) values (";
        query = query + "'" + i.id_actividad + "'";
        query = query + ",'" + i.id_user + "'";        
        query = query + ")";
        db.query(
            query,
            (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
    
    });
}


module.exports = {
    inscribirUser
}