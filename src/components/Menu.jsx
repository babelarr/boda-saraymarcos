import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  menuContainer:{
    height: "50vh",
  },
  wedding: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  place: {
    backgroundColor: "#b37d7d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  guests: {
    backgroundColor: "#ffcccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gallery: {
    backgroundColor: "#6bb37f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  });

class Menu extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <Grid container className={classes.menuContainer}>
            <Grid item xs={6} className={classes.wedding}>
              <Typography>Nos casamos</Typography>
            </Grid>
            <Grid item xs={6} className={classes.place}>
              <Typography>El enlace</Typography>
            </Grid>
            <Grid item xs={6} className={classes.guests}>
              <Typography>Invitados</Typography>
            </Grid>
            <Grid item xs={6} className={classes.gallery}>
              <Typography>Galería</Typography>
            </Grid>
        </Grid>
      );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Menu);