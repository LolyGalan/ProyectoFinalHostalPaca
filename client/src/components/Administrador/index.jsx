import React from 'react';
import '../Administrador/index.css';
import {Link} from 'react-router-dom';
import crearactiv from '../Administrador/creartareas.jpg';
import creartarea from '../Administrador/creartareas2.jpg';
import cartel from '../Portada/cartel.png';

class Administrador extends React.Component{
   render(){
       return(
            <div class="card-deck">
                   <div class="card">
                       <img src={creartarea} class="card-img-top" alt="l"/>
                       <div class="card-body">
                           <Link to="/Creartarea" className="card-title">Crear una nueva actividad o tarea</Link>
                           <h4 class="text-muted">Cada semana, dependiendo de la época del año creamos las actividades y tareas adecuadas </h4>
                       </div>
                   </div>
                   <div class="card">
                           <img src={crearactiv} class="card-img-top" alt="..."/>
                           <div class="card-body">
                               <Link to="/MuestraTareas" className="card-title">Mostrar Tareas y Actividades</Link><br/>
                               <h4 class="text-muted">Aquí podrás ver las actividades que tenemos creadas actualmente</h4>
                               <h4 class="text-muted">y podrás borrarlas cuando ya se hayan realizado</h4>
                           </div>
                   </div>
                   <div class="card">
                       <img src={cartel} class="card-img-top" alt="..."/>
                       <div class="card-body">
                           <Link to="/" className="card-title">Volver a página principal</Link><br/>
                           <h4 class="text-muted">Si no quieres crear, revisar, ni modificar tareas puedes volver a la página principal</h4>
                       </div>
                   </div>
           </div>
        )
   }
}
export default Administrador;