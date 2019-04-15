import React from 'react';
import './index.css';
import request from 'request';



class Inscripcion extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            id_actividad: '',
            id_user: '',
            error: null,
        }
    }
    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    componentDidMount(){
        this.inscribirse();
    }

    inscribirse = e => {
        console.log(this.state);
        const data = {
            id_actividad: this.state.id_actividad,
            id_user: this.state.id_user,
        };
        request.post({
            url:'http://localhost:3000/inscripcion', 
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
                else if  (resp.code === 'errorI'){
                    this.setState({error: resp.data})
                }
            }
            }.bind(this))
    }
    render() {
        
        return(
            <div>
                <Link to="/Usuario">Volver </Link><br/><br/>    
                <button type="button" onClick={this.componentDidMount}>Borrar</button>
            </div>
        )
    }
}
    export default Inscripcion;