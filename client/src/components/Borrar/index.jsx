import React from 'react';
//import {datos} from '../../datos';
import casita from '../Administrador/CasaPaca.jpg';
import {Link} from 'react-router-dom';
class BorrarTarea extends React.Component{
    constructor(props){
        super(props);
    }  
    render(){
        return(
             <div>
                 <p>Estas seguro de que quieres borrar la tarea?</p>
                 <Link to="/BorrarTarea">Si</Link><br/><br/>
                 <Link to="/Admin">No</Link><br/><br/>
            </div>
            )
        }
}
export default BorrarTarea;