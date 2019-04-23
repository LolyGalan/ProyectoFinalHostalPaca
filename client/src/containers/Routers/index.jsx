import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portada from '../../components/Portada';
import Registro from '../../components/Registro';
import Nosotros from '../../components/Nosotros';
import FormReg from '../../components/FormReg';
import Admin from '../../components/Admin';
import CrearTarea from '../../components/CrearTarea';
import MuestraTareas from '../../components/MuestraTareas';
import Borrar from '../../components/Borrar';
import BorrarTareas from '../../components/BorrarTareas';
import Usuarios from '../../components/Usuarios';
import Horario from '../../components/Horario';
import Comentarios from '../../components/Comentarios';
import TotalTomasDolar from '../../components/TotalTomasDolar';

const Routers = () => {
    return (
        <Switch> 
            <Route 
            exact
            path="/" 
            component={Portada}/>
            <Route path="/Registro" component={Registro}/>
            <Route path="/Nosotros" component={Nosotros}/>
            <Route path="/Horario" component={Horario}/>
            <Route path="/FormReg" component={FormReg}/>
            <Route path="/Admin" component={Admin}/>
            <Route path="/Creartarea" component={CrearTarea}/>
            <Route path="/MuestraTareas" component={MuestraTareas}/>
            <Route path="/Borrar" component={Borrar}/>
            <Route path="/BorrarTareas" component={BorrarTareas}/>
            <Route path="/Usuarios" component={Usuarios}/>
            <Route path="/Comentarios" component={Comentarios}/>
            <Route path="/TotalTomasDolar" component={TotalTomasDolar}/>
        </Switch>
    )
}
export default Routers;