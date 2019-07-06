import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import FileUpload from './FileUpload';

const styles = theme => ({
  galleryContainer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing.unit * 5
  },
  imgContainer:{
    margin: theme.spacing.unit * 2
  },

  media: {
    height: 200
  },
  buttonContainer:{
    marginTop: theme.spacing.unit * 2
  }
});

class Gallery extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.galleryContainer}>
          <Grid item>
            <Typography variant="h4" color="textSecondary">Galería de fotos</Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" align="center">
              En este espacio podrás subir el dia de la boda las fotos que vayas haciendo y verás las del resto de los invitados.
            </Typography>
          </Grid>
          <Grid item className={classes.buttonContainer}>
            <FileUpload handleUpload={this.props.handleUpload} uploadValue={this.props.uploadValue} />
          </Grid>
          <Grid container className={classes.imgContainer} spacing={16} >
            {
                this.props.pictures.map(picture => (
                  <Grid item xs={6} key={picture.key}>
                    <CardMedia
                      className={classes.media}
                      image= {picture.image}
                      title={picture.displayName}
                    />
                  </Grid>
              
                )).reverse()
              }
            </Grid>
      </Grid>
    );
  }
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Gallery);
