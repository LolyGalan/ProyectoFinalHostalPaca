import React from 'react';
import casita from '../CrearTarea/CasaPaca.jpg';
import request from 'request';
//import Administrador from '../Administrador';

class CrearTarea extends React.Component{

   constructor(props){
       super(props);
       this.state= {
           nombre:"",
           dia:"",
           tipodesemana:"",
           horadeinicio:"",
           duración: "",
           descripción:"",
           capacidad:"",
           tomasDolar:"",
           monitor:"",
           error: null
       }
       this.handleChange=this.handleChange.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
   }

   handleChange(e){
    const newState = {...this.state};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
    console.log(this.state)
   }
   

   handleSubmit(e){
       console.log(this.state);
       //aquí tengo que poner los datos que meto al darle a anviar para mandarlos a la base de datos 
       const data = {
            nombre: this.state.nombre,
            dia: this.state.dia,
            tipodesemana: this.state.tipodesemana,
            horadeinicio:this.state.horadeinicio,
            duracion:this.state.duracion,
            descripcion:this.state.descripcion,
            capacidad:this.state.capacidad,
            tomasDolar:this.state.tomasDolar,
            monitor:this.state.monitor
        };
        request.post({
            url:'http://localhost:3000/enviar', 
            form: data,
        }, function(err,response,body){ 
                console.log(response + "en react")
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
    
   return(
       <div className="card">
           <form className="card-body" >
           <img src={casita} alt="l" className="casita"/>
               <div >
                   <input
                   type="text"
                   name="nombre"
                   onChange={this.handleChange}
                   placeholder="Nombre"/>
               </div>
               <div>
                   <input
                   type="text"
                   name="dia"
                   onChange={this.handleChange}
                   placeholder="Dia"/>
               </div>
               <div>
                   <input
                   type="text"
                   name="tipodesemana"
                   onChange={this.handleChange}
                   placeholder="Tipodesemana"/>
               </div>
               <div>
                   <input
                   type="text"
                   name="horadeinicio"
                   onChange={this.handleChange}
                   placeholder="HoradeInicio"/>
               </div>
               <div>
                   <input
                   type="text"
                   name="duracion"
                   onChange={this.handleChange}
                   placeholder="Duración"/>
               </div>
               <div>
                   <input
                   type="text"
                   name="descripcion"
                   onChange={this.handleChange}
                   placeholder="Descripción"/>
               </div>
               <div>
                   <input
                   type="text"
                   name="capacidad"
                   onChange={this.handleChange}
                   placeholder="Capacidad"/>
               </div>
               
               <div>
                   <input
                   type="text"
                   name="tomasDolar"
                   onChange={this.handleChange}
                   placeholder="Tomás$Adquiridos"/>
               </div>
               <div>
                   <input
                   type="text"
                   name="monitor"
                   onChange={this.handleChange}
                   placeholder="Monitor"/>
               </div>
               <div>
                   <button
                   type="button" onClick={this.handleSubmit} 
                   >Enviar
                   </button>
               </div>
           </form>
       </div>
       )
}
}
export default CrearTarea;