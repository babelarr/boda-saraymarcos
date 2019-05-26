import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  menuContainer:{
    height: "50vh",
    maxWidth: "800px",
    margin: "auto"
  },
  wedding: {
    backgroundColor: "#ABC6E1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  place: {
    backgroundColor: "#8C7776",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  guests: {
    backgroundColor: "#FA8B84",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gallery: {
    backgroundColor: "#bfd3bb",
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