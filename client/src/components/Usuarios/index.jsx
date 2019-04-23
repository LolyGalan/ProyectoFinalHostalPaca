import React from 'react';
import hipica from '../Usuarios/hipica.jpg';
import cerdito from '../Usuarios/cerdito.jpg';
import cartel from '../Portada/cartel.png';
import fiesta from '../Usuarios/fiesta.jpg';
import '../Usuarios/index.css';
import {Link} from 'react-router-dom';

class Usuarios extends React.Component{
    render (){
    return (
        <div >
            <div class="card-columns">
                <div class="card">
                    <img src={hipica} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Actividades</h5>
                        <p class="card-text">Cada tarde debes elegir la actividad que quieres realizar al día siguiente </p>
                        <Link to="/MuestraTareas">Qué actividad quieres elegir para mañana?</Link>
                    </div>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">La Fiesta de la semana</h5>
                        <img src={fiesta} class="card-img-top2" alt="..."/>
                        
                        <p class="card-text">Recuerda que cada Sábado por la tarde celebraremos una gran fiesta</p>
                    </div>
                </div>
                <div class="card p-3">
                <div class="card text-white bg-success mb-3" >
                    <div class="card-header">Bienvenid@</div>
                            <div class="card-body">
                                <h5 class="card-title">Tu página</h5>
                                <p class="card-text">Esta es tu página privada, aquí puedes elegir tareas, actividades,mandar comentarios y contar tus Tomas$</p>
                            </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Tu experiencia en HostalPaca</h5>
                        <p class="card-text">Aquí puedes escribir tus comentarios para ayudarnos a mejorar.</p>
                    </div>
                    <Link to="/Comentarios">Comentarios de HostalPaca</Link>
                </div>
                <div class="card bg-primary text-white text-center p-3">
                    <blockquote class="blockquote mb-0">
                        <p>HostalPaca quiere ofrecerte las mejores actividades, si quieres puedes proponer alguna </p>
                        <footer class="blockquote-footer text-white">
                            <small>
                            Puedes exponerle tus ideas a tu monitor
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Tomas$</h5>
                        <img src={cerdito} class="card-img-top2" alt="..."/>
                        <Link to="/TotalTomasDolar">Cuantos TomásDolar tienes</Link>
                        <p class="card-text">Aquí puedes ver los Tomás$ que llevas acumulados</p>
                    </div>
                </div>
                <div class="card">
                    <img src={cartel} class="card-img-top" alt="..."/>
                    <Link to="/">Home</Link>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Tareas</h5>
                        <p class="card-text">Cada tarde debes elegir la tarea que quieres realizar al día siguiente</p>
                        <Link to="/MuestraTareas">Qué tarea quieres hoy?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
    export default Usuarios;




