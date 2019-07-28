import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import FileUpload from './FileUpload';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

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
  zoomPhotoContainer: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: 'RGBA(0, 0, 0, 0.7)',
    padding: theme.spacing.unit * 2
  },
  zoomPhoto: {
    width: '100%',
    margin: '0 auto'
  },
  fabClose:{
    position: 'fixed',
    top: 20,
    right: 20,
    zIndex: 101,
  }

});

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      srcImage: ''
    }
    this.closeFunction = this.closeFunction.bind(this);
    this.openFunction = this.openFunction.bind(this);
  }

  closeFunction () {
    this.setState({
      open: false
    })
  }

  openFunction (e) {
    let src = e.target.style.backgroundImage;
    src = src.replace('url(','').replace(')','').replace(/\"/gi, "");
    this.setState({
      open: true,
      srcImage: src
    })
  }

  render() {
    const { classes, loading, handleUpload, uploadValue, pictures } = this.props;

    return (
      <div>
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
                        onClick={this.openFunction}
                      />
                    </Grid>

                  )).reverse()
                }
              </Grid>
        </Grid>
        {
          this.state.open === true &&
          <div className={classes.zoomPhotoContainer} onClick={this.closeFunction}>
            <img src={this.state.srcImage} className={classes.zoomPhoto} alt="img de prueba"/>
          </div>
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Gallery);
