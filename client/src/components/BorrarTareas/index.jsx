import React from 'react';
//import {datos} from '../../datos';
import request from 'request';
//import './index.css';
import {Link} from 'react-router-dom';
class BorrarTareas extends React.Component{
    constructor(props){
        super(props);
        
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
        this.borrarDatos();
    }
       borrarDatos(){
           console.log(this.state);
           //aquí tengo que poner los datos que meto al darle a enviar para mandarlos a la base de datos 
           const data = {
                id: this.state.id,
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
                url:'http://localhost:3000/borrar', 
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
        
        return(
             <div>
                <Link to="/Administrador">Volver </Link><br/><br/>    
                <button type="button" onClick={this.componentDidMount}>Borrar</button>
                    
            </div>
            )
        }
        
    
}

export default BorrarTareas;
