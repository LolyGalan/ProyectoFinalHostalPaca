import React from 'react';
import './index.css';
import request from 'request';
import Administrador from '../Administrador';
import Usuarios from '../Usuarios';


class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            nombre: '',
            password: '',
            error: null,
        }
    }

    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = e => {
        const data = {
            uname: this.state.username,
            psw: this.state.password,
        };
        request.post({
            url:'http://localhost:3000/login', 
            form: data,
        }, function(err,response,body){ 
            console.log(response)
            if (err) {
                this.setState({error: err})
            } else {
                const resp = JSON.parse(body);
                console.log(resp);
                if (resp.code === 'E3') {
                    this.setState({error: resp.data})
                }
                else if (resp.code === 'ok') {
                    const TOKEN = "token";
                    this.setState({datos: resp.data});
                    console.log(this.state.datos.token);
                    const token = this.state.datos.token;
                    sessionStorage.setItem(TOKEN, token)
                   
                }
                else if  (resp.code === 'E2'){
                    this.setState({error: resp.data})
                }
            }
            }.bind(this))
    }
    render() {
        const { datos, error } = this.state;
        console.log(datos);
        if (datos) {
            if (datos.rol == '1'){
                return (
                    <div> 
                        <div className= "card-header">
                            <h1>Nombre de usuario: {datos.name}</h1>
                        </div>
                        <div className= "card-body">
                            <div className="card text-center border-info">
                                <p>Tienes : {datos.edad}</p><br/>
                                <p>Eres: {datos.comoeres}</p><br/>
                                <p>Email: {datos.email}</p><br/>
                                <Administrador/>
                            </div>
                        </div>
                        
                    </div>
                )
            }else {
                return (
                <div>
                    <div className= "card-header">
                         <h1>Nombre de usuario: {datos.nombre}</h1>
                     </div>
                     <div className= "card-body">
                        <div className="card text-center border-info">
                            <p>Edad: {datos.edad}</p><br/>
                            <p>Como eres: {datos.comoeres}</p><br/>
                            <p>Email: {datos.email}</p><br/>
                            <Usuarios/>
                        </div>
                        
                    </div>
                    
                </div>)
            }
            
        }
        let mostrarError = null;
        if (error) {
            mostrarError = <div>{error}</div>;
        }
        return(
            <div>
                { mostrarError }
                <form>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="username" onChange={this.handleChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} />
                    <button type="button" onClick={this.handleSubmit}>Accede</button>
                </form>
            </div>
        )
    }
}

    export default Admin;