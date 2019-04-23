import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="secondary" href="Nosotros" className={classes.button}>
        Nosotros
      </Button>
      <Button variant="contained" color="secondary" href="horario"className={classes.button}>
        Nuestro día
      </Button>
      <Button variant="contained" color="secondary" href="registro" className={classes.button}>
        Acceso
      </Button>
      
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
