const db = require('../config/mysql');


const findByTarea = nombre => {
    return new Promise ((resolve, reject) => {
        db.query(
            "Select * from actividades where dia = '"
            +nombre
            +"'", 
            (err, results, fields) => {
                if (err) reject(err);
                resolve(results);
            });
    
    });
}


module.exports = {
    findByTarea
}