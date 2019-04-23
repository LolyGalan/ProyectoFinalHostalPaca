import React from 'react';
import '../Horario/index.css';
import horario from '../Horario/horario.jpg';
class Horario extends React.Component {

   render(){
       return(
           <div >
               <img src={horario} alt="..." className="horario"/>
           </div>
       )
   }

}
export default Horario;