import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    padding: "20px"
  },
  media: {
    width: 120,
    height: 24,
    backgroundSize: "unset",
  }
});

class Footer extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <footer>
            <Grid container className={classes.footerContainer}>
            <div className={classes.logoContainer}>
                <CardMedia
                  className={classes.media}
                  image="../images/logo_sara_marcos_w.svg"
                  title="Fotografia de Sara y Marcos"
                />
              </div>
                <Grid item>
                  <Typography color="textSecondary">Madrid, 12 de Octubre 2019</Typography>
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