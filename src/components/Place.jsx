import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  placeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
  },
  placeBg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    padding: 20,
    backgroundImage: "url('../images/el-pendolero.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  containerLocation: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 20
  },
  containerMap: {
    backgroundImage: "url('../images/map.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  containerButton: {
    backgroundColor: "white",
    padding: "20px"
  }
  });

class Place extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <Grid container className={classes.placeContainer}>
          <Grid item x={12} className={classes.placeBg}>
              <Typography variant="h4" color="textSecondary">
                Lugar del Enlace
              </Typography>
              <Typography color="textSecondary">
                El enlace y posterior celebración tendrá lugar en la finca madrileña El Pendolero a las 13:30
              </Typography>
          </Grid>
          <Grid item xs={12} className={classes.containerLocation}>
            <Grid item xs={12} md={6} className={classes.containerMap}>
              
            </Grid>
            <Grid item xs={12} md={6} className={classes.containerButton}>
              <Typography>
                La finca El Pendolero está situada en la carretera del Pardo s/n 28250 Torrelodones, Madrid.
                Te facilitamos la ubicación y cómo llegar, en el siguiente enlace.
              </Typography>
              <Button variant="contained" color="primary">Google Maps</Button>
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