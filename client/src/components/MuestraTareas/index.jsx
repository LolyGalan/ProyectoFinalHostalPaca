import React from 'react';
//import {datos} from '../../datos';
//import casita from '../Administrador/CasaPaca.jpg';
import request from 'request';

import '../MuestraTareas/index.css';
import {Link, Redirect} from 'react-router-dom';


class MuestraTareas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            dia:"",
            tipodesemana:"",
            horadeinicio:"",
            duración: "",
            descripción:"",
            descripción:"",
            capacidad:"",
            tomasDolar:"",
            monitor:"",
            error: null,
            
        }
       this.handleChange=this.handleChange.bind(this);
       this.componentDidMount=this.componentDidMount.bind(this);
    }
    handleChange(e){
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        console.log(this.state)
    }
    componentDidMount() {
        
    }

    enviarInscripcion = idTarea =>{
        console.log(this.state);
        //aquí tengo que poner los datos que meto al darle a enviar para mandarlos a la base de datos 
        const data = {
             idTarea: idTarea
         };
         request.post({
             url:'http://localhost:3000/inscripcion/', 
             headers: {
                 'x-access-token': sessionStorage.getItem('token')
             },
             form: data,
         }, function(err,response,body){ 
                 console.log(response)
                 if (err) {
                     this.setState({error: err})
                 } else {
                     const resp = JSON.parse(body);
                     console.log(resp);
                     if (resp.code === 'ok') {
                         this.setState({datos1: resp.data})
                        
                     }
                     else if  (resp.code === 'E1'){
                         this.setState({error: resp.data})
                     }
                 }
             }.bind(this))
     }
       pedirDatos = e => {
           console.log(this.state);
           //aquí tengo que poner los datos que meto al darle a enviar para mandarlos a la base de datos 
           const data = {
                nombre: this.state.nombre,
                dia: this.state.dia,
                tipodesemana: this.state.tipodesemana,
                horadeinicio:this.state.horadeinicio,
                duracion:this.state.duracion,
                descripcion:this.state.descripcion,
                capacidad:this.state.capacidad,
                tomasDolar:this.state.tomasDolar,
                monitor:this.state.monitor
            };
            request.post({
                url:'http://localhost:3000/mostrar', 
                form: data,
            }, function(err,response,body){ 
                    console.log(response)
                    if (err) {
                        this.setState({error: err})
                    } else {
                        const resp = JSON.parse(body);
                        console.log(resp);
                            this.setState({datos: resp})

                        if  (resp.code === 'E1'){
                            this.setState({error: resp.data})
                        }
                    }
                }.bind(this))
        }
    render(){
        const { datos, error, datos1 } = this.state;
        console.log(datos);
        console.log(datos1);
        if (datos) {
            if (datos1){
                return (
                    <div>
                        <Redirect to="/Usuarios"/>
                    </div>
                )
            }
                return (
                    <div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Tareas 
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Agricultor</a>
                                <a className="dropdown-item" href="#">Granjero</a>
                                <a className="dropdown-item" href="#">Panadero</a>
                                <a className="dropdown-item" href="#">Chef</a>
                                <a className="dropdown-item" href="#">Metre</a>
                            </div>
                        </div>    
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Actividades 
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Hípica</a>
                                <a className="dropdown-item" href="#">Tenis</a>
                                <a className="dropdown-item" href="#">Futbol</a>
                                <a className="dropdown-item" href="#">Baloncesto</a>
                                <a className="dropdown-item" href="#">Rítmica</a>
                                <a className="dropdown-item" href="#">Ajedrez</a>
                            </div>
                        </div>  
                        <div>
                        {datos.map(item => (
                            <div key={item.id}>
                            <div className= "Muestratareas card-header">
                                <h1>Nombre de la Actividad: {item.nombre}</h1>
                            </div>
                            <div className= "card-body">
                                <div>
                                    <div className="card text-center border-info"> 
                                        <p>Monitor: {item.monitor}</p><br/>
                                        <p>Tipo de semana: {item.tipodesemana}</p><br/>
                                        <p>Dia: {item.dia}</p><br/>
                                        <p>Hora de inicio: {item.horadeinicio}</p><br/>
                                        <p>Duración: {item.duracion}</p><br/>
                                        <p>Descripción: {item.descripcion}</p><br/>
                                        <p>Capacidad: {item.capacidad}</p><br/>
                                        
                                    </div>
                                        <Link id={item.id} to={`/Borrar/${item.id}`}>Borrar </Link><br/><br/>
                                        <button type="button" onClick={() =>this.enviarInscripcion(item.id)}>Inscribete</button>
                                    </div>
                                </div>
                            </div>
                                )
                            )}  
                            
            } 
                             
                        </div>
                    </div>
                   
            )}
        
        /*else if (error){
            return(
                <div>{error}</div>
            ) 
            }*/
        
        else {
            return(
             <div>
                <form>                    
                        <label htmlFor="dia">Dia de la semana:</label>
                        <input type="text" id="dia" name="dia" onChange={this.handleChange} />
                        <button type="button" onClick={this.pedirDatos}>Mostrar Tarea</button>
                </form>  
            </div>
            )}
        }   
}
export default MuestraTareas;
                    