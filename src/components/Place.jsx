import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  placeBg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    padding: theme.spacing.unit * 5,
    backgroundImage: "url('../images/el-pendolero.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "inherit"
  },
  containerLocation: {
    padding: theme.spacing.unit * 5
  },
  media: {
    height: 200
  },
  link: {
    textDecoration: "none"
  }
});

class Place extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item x={12} className={classes.placeBg}>
            <Typography variant="h4" color="textSecondary">
              Lugar del Enlace
            </Typography>
            <Typography color="textSecondary" align="center">
              El enlace y posterior celebración tendrá lugar en la finca madrileña El Pendolero a las 13:30
            </Typography>
        </Grid>
        <Grid container xs={12} className={classes.containerLocation} spacing={32}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              className={classes.media}
              image="../images/map.png"
              title="Plano de localizacion google maps"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              La finca El Pendolero está situada en la carretera del Pardo s/n 28250 Torrelodones, Madrid.
              Te facilitamos la ubicación y cómo llegar, en el siguiente enlace.
            </Typography>
            <a href="https://www.google.com/maps/place/Finca+El+Pendolero/@40.591404,-3.8868847,17z/data=!3m1!4b1!4m5!3m4!1s0xd41781c686d4479:0xa3e5d1c54d37165a!8m2!3d40.591404!4d-3.884696" target="_blank" rel="noopener noreferrer" className={classes.link}>
              <Button variant="contained" color="primary">Google Maps</Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Place.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Place);