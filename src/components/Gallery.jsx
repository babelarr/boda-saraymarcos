import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  galleryContainer:{
    backgroundColor: "#6bb37f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  }
  });

class Gallery extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <Grid container className={classes.galleryContainer}>
            <Grid item>
              <Typography variant="h3" color="textPrimary">Galería de fotos</Typography>
            </Grid>
            <Grid item>
              <Typography>En esta sección podrás compartir las fotos que hagas en la boda y así las podremos tener todos</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">Sube tu foto</Button>
            </Grid>
        </Grid>
      );
    }
}

Gallery.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Gallery);