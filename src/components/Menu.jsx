import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  menuContainer:{
    height: 400
  },
  itemContainer:{
    height: '100%'
  },
  wedding: {
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  place: {
    width: '100%',
    backgroundColor: theme.palette.primary.dark
  },
  guests: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main
  },
  gallery: {
    width: '100%',
    backgroundColor: theme.palette.secondary.dark
  },
  links: {
    color: "unset",
    textDecoration: "unset"
  }
});

class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.menuContainer} direction="column" justify="center" alignItems="center">
          <Grid item xs={6} className={classes.wedding}>
            <Grid container className={classes.itemContainer} justify="center" alignItems="center">
              <Grid item>
                <Typography color="textSecondary" variant="h5"><a href="#wedding" className={classes.links}>Nos casamos</a></Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.place}>
            <Grid container className={classes.itemContainer} justify="center" alignItems="center">
              <Grid item>
                <Typography color="textSecondary" variant="h5"><a href="#place" className={classes.links}>El enlace</a></Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.guests}>
            <Grid container className={classes.itemContainer} justify="center" alignItems="center">
              <Grid item>
                <Typography color="textSecondary" variant="h5"><a href="#guests" className={classes.links}>Invitados</a></Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.gallery}>
            <Grid container className={classes.itemContainer} justify="center" alignItems="center">
              <Grid item>
                <Typography color="textSecondary" variant="h5"><a href="#gallery" className={classes.links}>Galería</a></Typography>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Menu);
