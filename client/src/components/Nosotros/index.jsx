import React from 'react';
import '../Nosotros/index.css';
import pergamino from '../Nosotros/pergamino.jpg';
class Nosotros extends React.Component {

    render(){
        return(
            <div>
                <img src={pergamino} alt="..." className="pergamino"/>
            </div>
        )
    }
    
}
export default Nosotros;