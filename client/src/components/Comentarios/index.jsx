import React from 'react';
//import './index.css';
import request from 'request';
import Usuarios from '../Usuarios';
class Comentarios extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            coment:"",
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
       registrarComentarios = e =>{
           console.log(this.state);
           //aquí tengo que poner los datos que meto al darle a enviar para mandarlos a la base de datos 
           const data = {
                nombre:this.state.nombre,
                coment: this.state.coment
            };
            request.post({
                url:'http://localhost:3000/comentar', 
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
        console.log(datos + "tenemos datos");
            if (datos){
                return(
                    <div>
                        <p>Gracias!!!!, tu comentarios nos ayudará a mejorar</p><br/><br/>
                        <Usuarios/>
                    </div>
                )
            } 
            else if (error){
                return (
                    <div>
                        <p>Prueba de nuevo</p>
                    </div>
                )}
            
        
        return(
            <div>
                <form>
                    <h1>Comentario</h1>
                    <fieldset>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="nombre" onChange={this.handleChange} />
                        <label >Cuéntanos tu experiencia en HostalPaca:</label>
                        <input type="text" name="coment" onChange={this.handleChange} />
                    </fieldset>
                    <button type="button" onClick={this.registrarComentarios}>Enviar</button>
                </form>
            </div>
    )
    }
}
export default Comentarios;