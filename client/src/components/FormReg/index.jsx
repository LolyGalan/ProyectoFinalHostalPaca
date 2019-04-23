import React from 'react';
import '../FormReg/index.css';
import request from 'request';
import Registro from '../Registro';
class FormReg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            contraseña:"",
            edad:"",
            comoeres:"",
            email: "",
            rol:"0",
            error: null
        }
       
    }
    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        console.log(this.state)
    }
    
       registrarDatos = e =>{
           console.log(this.state);
           //aquí tengo que poner los datos que meto al darle a enviar para mandarlos a la base de datos 
           const data = {
                nombre: this.state.nombre,
                contraseña: this.state.contraseña,
                edad: this.state.edad,
                comoeres:this.state.comoeres,
                email:this.state.email,
                rol:this.state.rol
            };
            request.post({
                url:'http://localhost:3000/registrar/', 
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
        const {datos, error} = this.state;
        console.log(datos + "tenemos datos");
            if (datos){
                return(
                    <div>
                        <h5>Enhorabuena!!!!, te has registrado correctamente</h5><br/><br/>
                        <Registro/>
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
                    <h1>Registro</h1>
                    <fieldset>
                        <legend><span class="number">1</span>Tus datos</legend>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="nombre" onChange={this.handleChange}/>

                        <label htmlfor="password">Password:</label>
                        <input type="password" id="password" name="contraseña" onChange={this.handleChange} />
                        
                        <label>Edad:</label>
                        <input type="number" name="edad" onChange={this.handleChange}/>
                    </fieldset>
                    <fieldset>
                        <legend><span class="number">2</span>Tu perfil</legend>
                        <label >Cuéntanos como eres:</label>
                        <input type="text" name="comoeres" onChange={this.handleChange} />
                       

                        <label for="mail">Email:</label>
                        <input type="email" id="mail" name="email" onChange={this.handleChange}/>
                    </fieldset>
                    <button type="button" onClick={this.registrarDatos}>Enviar</button>
                </form>
            </div>
    )
    }
}
export default FormReg;