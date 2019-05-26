import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  menuContainer:{
    height: 400
  },
  wedding: {
    backgroundColor: theme.palette.primary.main
  },
  place: {
    backgroundColor: theme.palette.primary.dark
  },
  guests: {
    backgroundColor: theme.palette.secondary.main
  },
  gallery: {
    backgroundColor: theme.palette.secondary.dark
  },
});

class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.menuContainer}>
          <Grid container xs={6} className={classes.wedding} justify="center" alignItems="center">
            <Typography color="textSecondary" variant="h5">Nos casamos</Typography>
          </Grid>
          <Grid container xs={6} className={classes.place} justify="center" alignItems="center">
            <Typography color="textSecondary" variant="h5">El enlace</Typography>
          </Grid>
          <Grid container xs={6} className={classes.guests} justify="center" alignItems="center">
            <Typography color="textSecondary" variant="h5">Invitados</Typography>
          </Grid>
          <Grid container xs={6} className={classes.gallery} justify="center" alignItems="center">
            <Typography color="textSecondary" variant="h5">Galería</Typography>
          </Grid>
      </Grid>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Menu);