const db =require('../config/mysql');


function insertarComent (act){
    return new Promise ((resolve, reject)=>{
       
        let query = "update usuarios set comentarios=";
        query = query + "'" + act.coment + "'";
        query = query + "where nombre='" + act.nombre + "'";
        
        db.query(
            query,
            (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
    
    });
}
module.exports = {
    insertarComent
}