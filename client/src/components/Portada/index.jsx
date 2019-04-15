import React from 'react';
//import casita from '../Portada/CasaPaca.jpg';
import cartel from '../Portada/cartel.png';

class Portada extends React.Component {
    render(){
        return (
            <div>
                <img src={cartel} alt="l" className="cartel"/>
            </div>
        )
    }
}
export default Portada;