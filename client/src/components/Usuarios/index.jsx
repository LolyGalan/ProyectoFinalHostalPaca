import React from 'react';

import './index.css';
import {Link} from 'react-router-dom';

class Usuarios extends React.Component{
    
    render (){
    return (
        <div id="principal">
            <div id="1">
                <Link to="/MuestraTareas">Qué actividad quieres hoy?</Link>
            </div>
            <div id="2">
                <Link to="/MuestraTareas">Qué tarea quieres hoy?</Link>
            </div>
            <div id="3">
                <Link to="/TomasDolar">Cuantos TomásDolar tienes</Link>
            </div>
            <div id="4">
                <Link to="/Cuestionario">Cuestionario</Link>
            </div>
        </div>
    )
    }
}
export default Usuarios;




