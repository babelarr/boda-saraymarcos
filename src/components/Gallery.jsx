import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  galleryContainer:{
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    margin: "auto"
  }
  });

class Gallery extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <Grid container className={classes.galleryContainer}>
            <Grid item>
              <Typography variant="h4" color="textSecondary">Galería de fotos</Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary">
                En este espacio podrás subir el dia de la boda las fotos que vayas haciendo y verás las del resto de los invitados.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">Sube tu foto</Button>
            </Grid>
        </Grid>
      );
    }
}

Gallery.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Gallery);