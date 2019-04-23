const db = require('../config/mysql');

const totalTomasDolares = nombre => {
    return new  Promise ((resolve,reject) => {
        db.query(
            "select SUM(tomasDolar)  from usuarios inner join user_activity inner join actividades where usuarios.id=user_activity.id_user and user_activity.id_actividad=actividades.id and usuarios.nombre= '" + nombre + "'" ,
            (err,results)=> {
                if (err) reject(err);
                resolve(results);
            }
        );
    });
}
module.exports = {
    totalTomasDolares
}
