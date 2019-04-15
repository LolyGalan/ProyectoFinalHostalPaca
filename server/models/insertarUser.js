const db =require('../config/mysql');
const crypt = require ("../util/crypt-util");

function insertarUser (act){
    return new Promise ((resolve, reject)=>{
        // insert into usuariosh( nombre, contraseña, telefono, rol) values ('Tomas', 'ctsñ2', '622345678', '1');
        let query = "insert into usuarios(nombre, contraseña, edad, comoeres, email, rol) values (";
        query = query + "'" + act.nombre + "'";
        query = query + ", '" + crypt.encrypt(act.contraseña) + "'";
        query = query + ",'" + act.edad + "'";
        query = query + ",'" + act.comoeres + "'";
        query = query + ",'" + act.email + "'";
        query = query + ",'0'";
        
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
    insertarUser
}