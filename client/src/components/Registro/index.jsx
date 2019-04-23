import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import '../Registro/index.css';
//import Fab from '@material-ui/core/Fab';
//import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import sinrostro from '../Registro/sinrostro.jpg';
import conrostro from '../Registro/conrostro.jpg';
import administradora from '../Registro/admin.jpg';
const styles = theme => ({
 button: {
   margin: theme.spacing.unit,
 },
 input: {
   display: 'none',
 },
});

function Registro(props) {
 const { classes } = props;
 return (
   <div>
      <div class="card-deck">
                   <div class="card">
                       <div class="card-body">
                           <Link to="/FormReg" className="card-title"><img src={sinrostro} alt="l" className="imagen"/></Link>
                           <h4>Si eres nuevo </h4>
                       </div>
                   </div>
                   <div class="card">
                           <div class="card-body">
                               <Link to="/admin" className="card-title"><img src={conrostro} alt="l" className="imagen"/></Link><br/>
                               <h4 className="turquesa">Si eres nuestro </h4>
                           </div>
                   </div>
                   <div class="card">
                       <div class="card-body">
                           <Link to="/admin" className="card-title"><img src={administradora} alt="l" className="imagen"/>   </Link><br/>
                           <h4 className="rojo">Si eres admin</h4>
                       </div>
                   </div>
      </div>
    </div>
 );
}

Registro.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registro);