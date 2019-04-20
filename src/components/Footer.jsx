import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    footerContainer: {
      backgroundColor: "#ffcccc",
      display: "flex",
      justifyContent: "space-between",
      color: "white",
      padding: "20px"
   } 
  });

class Footer extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <footer>
            <Grid container className={classes.footerContainer}>
                <Grid item>
                  Sara y Marcos
                </Grid>
                <Grid item>
                  <Typography>Madrid, 12 de Octubre 2019</Typography>
                </Grid>
            </Grid>
        </footer>
      );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Footer);