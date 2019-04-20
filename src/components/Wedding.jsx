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
    padding: "20px"
  },
  videoContainer:{
    width:"300px",
    height: "300px",
    backgroundColor: "lightGrey"
  }
  });

class Wedding extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <Grid container className={classes.weddingContainer}>
            <Grid item>
              <Typography variant="h3">Nos casamos</Typography>
            </Grid>
            <Grid item>
              <Typography>Aqui va el texto de la boda</Typography>
            </Grid>
            <Grid item className={classes.videoContainer}>
              <media>Video corporativo</media>
            </Grid>
        </Grid>
      );
    }
}

Wedding.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Wedding);