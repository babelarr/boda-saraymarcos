import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  weddingContainer:{
    padding: theme.spacing.unit * 5
  }
});

class Wedding extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" justify="center" className={classes.weddingContainer}>
        <Grid item>
          <Typography variant="h4" color="primary" align="center">Nos casamos</Typography>
        </Grid>
        <Grid item>
          <Typography align="center">
            El próximo 12 de Octubre de 2019 no hagas planes… ¡Nos casamos¡ y queremos que estés en este día tan especial para nosotros.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Wedding.propTypes = {
  classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Wedding);