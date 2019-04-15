import React from 'react';
import admin from './Admin.jpg';
import './indexp.css'
import casita from '../Administrador/CasaPaca.jpg';
import {Link} from 'react-router-dom';


class Administrador extends React.Component{
    
    render(){
        
            return <div>
                         <div>
                              <Link to="/Creartarea" className="titulo">Crear una nueva actividad o tarea</Link><br/>
                              <Link to="/MuestraTareas">MuestraTareas</Link><br/>
                              <Link to="/BorrarTareas">Borrar una tarea</Link><br/>
                              <img src={admin} alt="l" className="casita"/>
                              
                         </div>
                   </div>
            
    }
}
export default Administrador;