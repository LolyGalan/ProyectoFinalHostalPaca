import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './index.css';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';

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
    <div className="boton">
      <p>Si eres nuevo pulsa <Link to="/FormReg">Nuevo</Link></p><br/><br/>
      <br/><br/>
      <p>Si eres de la casa pulsa <Link to="/admin">Nuestro</Link></p><br/><br/>
       <p>Si eres administrador pulsa <Link to="/admin">Admin</Link></p>
    </div>
  );
}

Registro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registro);