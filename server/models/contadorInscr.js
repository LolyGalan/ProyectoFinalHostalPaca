const db = require('../config/mysql');

const contarInscritos = id => {
    console.log("contar inscritos de la actividad: " + id);
    return new  Promise ((resolve,reject) => {
        db.query(
            "select count(*) as  cantidad, nombre from user_activity inner join actividades on actividades.id= user_activity.id_actividad where id_actividad= " + id ,
            (err,results)=> {
                if (err) reject(err);
                resolve(results);
            }
        );
    });
}
module.exports = {
    contarInscritos
}
//select count(*) as  cantidad, nombre from user_activity 
//inner join actividades on actividades.id= user_activity.id_actividad where //id_actividad=5;