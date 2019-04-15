const db = require('../config/mysql');


const mandarBorrado = id => {
    return new Promise ((resolve, reject) => {
        console.log(id)
        db.query(
            "Delete * from actividades where id = '"
            +id
            +"'", 
            (err, results, fields) => {
                if (err) reject(err);
                resolve(results);
            });
    
    });
}


module.exports = {
    mandarBorrado
}