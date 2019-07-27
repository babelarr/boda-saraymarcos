import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import FileUpload from './FileUpload';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  galleryContainer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing.unit * 5
  },
  media: {
    height: 200
  },
  buttonContainer:{
    margin: theme.spacing.unit * 3
  },
  linearColorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  linearBarColorPrimary: {
    backgroundColor: '#d7b9bc',
  },
});

class Gallery extends Component {
  render() {
    const { classes, loading, handleUpload, uploadValue, pictures } = this.props;

    return (
      <Grid id='gallery' container direction="column" justify="center" alignItems="center" className={classes.galleryContainer}>
          <Grid item xs={12}>
            <Typography variant="h4" color="textSecondary" align="center">Galería de fotos</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" align="center">
              ¡¡PA-TA-TA!! Nos encantan las fotos y necesitamos que nos ayudes a inmortalizar todos los momentos de nuestro día. Haz todas las que quieras y pulsa al botón "SUBIR IMAGEN"
            </Typography>
            {
              loading &&
              <LinearProgress variant="determinate" value={uploadValue}
                classes={
                  {
                    colorPrimary: classes.linearColorPrimary,
                    barColorPrimary: classes.linearBarColorPrimary,
                  }
                }
              />

            }
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <FileUpload handleUpload={handleUpload} uploadValue={uploadValue} />
          </Grid>
          <Grid container spacing={16}>
            {
                pictures.map(picture => (
                  <Grid item xs={6} sm={4} md={3} key={picture.key}>
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
