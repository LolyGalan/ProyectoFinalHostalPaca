import React from 'react';
//import {datos} from '../../datos';
import casita from '../Administrador/CasaPaca.jpg';
import request from 'request';
import './index.css';
import {Link} from 'react-router-dom';
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
            error: null
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
        this.pedirDatos();
    }
       pedirDatos(){
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
                        if (resp.code === 'ok') {
                            this.setState({datos: resp.data})
                            
                        }
                        else if  (resp.code === 'E1'){
                            this.setState({error: resp.data})
                        }
                    }
                }.bind(this))
        }
    render(){
        const { datos, error } = this.state;
        console.log(datos);
        if (datos) {
            return (
                <div>
                    
                            <div className= "Muestratareas card-header">
                                <h1>Nombre de la tarea: {datos.nombre}</h1>
                            </div>
                            <div className= "card-body">
                                <div className="card text-center border-info">
                                    <p>Monitor: {datos.monitor}</p><br/>
                                    <p>Tipo de semana: {datos.tipodesemana}</p><br/>
                                    <p>Dia: {datos.dia}</p><br/>
                                    <p>Hora de inicio: {datos.horadeinicio}</p><br/>
                                    <p>Duración: {datos.duracion}</p><br/>
                                    <p>Descripción: {datos.descripcion}</p><br/>
                                    <p>Capacidad: {datos.capacidad}</p><br/>
                                    <p>Tomás $ adquiridos/día con esta tarea: {datos.tomasDolar}</p><br/>
                                </div>
                                    <Link to="/Borrar">Borrar </Link><br/><br/>
                            </div>
                        
                </div>
            )} 
        /*else if (error){
            return(
                <div>{error}</div>
            ) 
            }*/
        return(
             <div>
                    <form>
                        <label htmlFor="nombre">Nombre de la tarea:</label>
                        <input type="text" id="name" name="nombre" onChange={this.handleChange} />
                        <label htmlFor="dia">Dia de la semana:</label>
                        <input type="text" id="dia" name="dia" onChange={this.handleChange} />
                        <button type="button" onClick={this.componentDidMount}>Mostrar Tarea</button>
                    </form>
            </div>
            )
        }
        
    
}

export default MuestraTareas;