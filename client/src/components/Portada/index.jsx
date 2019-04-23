import React from 'react';
//import casita from '../Portada/CasaPaca.jpg';
import cartel from '../Portada/cartel.png';
import '../Portada/index.css';
class Portada extends React.Component {
    constructor(props){
        super((props))
    }
    render(){
        return (
            <div className="cartel">
                <img src={cartel} alt="l" />
            </div>
        )
    }
}
export default Portada;