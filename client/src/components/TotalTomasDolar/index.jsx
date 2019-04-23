import React from 'react';
//import './index.css';
import request from 'request';
import Usuarios from '../Usuarios';
class TotalTomasDolar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
           
            error: null
        }
    }
    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        console.log(this.state)
    }
    componentDidMount() {
        
    }
       sumar = e =>{
           console.log(this.state);
           //aquí tengo que poner los datos que meto al darle a enviar para mandarlos a la base de datos 
           const data = {
                nombre:this.state.nombre,
                
                
            };
            request.post({
                url:'http://localhost:3000/tomas', 
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
                        else if  (resp.code === 'E3'){
                            this.setState({error: resp.data})
                        }
                    }
                }.bind(this))
        }
    render(){
        const {datos, error} = this.state;
        console.log(JSON.stringify(datos) + "tenemos datos");
            if (datos){
                return(
                    <div>
                        <p>Enhorabuena, has conseguido {datos[0]}</p><br/><br/>
                        <Usuarios/>
                    </div>
                )
            } 
            else if (error){
                return (
                    <div>
                        <p>Todavia no tienes TomásDolares</p>
                    </div>
                )}
        return(
            <div>
                <form>
                    <h1>Tus TomásDólares</h1>
                    <fieldset>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="nombre" onChange={this.handleChange} />
                    </fieldset>
                    <button type="button" onClick={this.sumar}>Enviar</button>
                </form>
            </div>
    )
    }
}
export default TotalTomasDolar;