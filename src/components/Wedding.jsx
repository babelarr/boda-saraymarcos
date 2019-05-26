import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  weddingContainer:{
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    maxWidth: "800px",
    margin: "auto"
  },
  videoContainer:{
    width:"600px",
    height: "300px",
    backgroundColor: "lightGrey"
  },
  text:{
    textAlign: "center"
  }
  });

class Wedding extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <Grid container className={classes.weddingContainer}>
            <Grid item>
              <Typography variant="h3" color="#ffcc00">Nos casamos</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Typography>
                El próximo 12 de Octubre de 2019 no hagas planes… ¡Nos casamos¡ y queremos que estés en este día tan especial para nosotros.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.videoContainer}>
              <media></media>
            </Grid>
        </Grid>
      );
    }
}

Wedding.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Wedding);