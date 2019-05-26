import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  sliderContainer:{
    height: "50vh",
    backgroundImage: "url('../images/foto-test.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
  });

class Slider extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <div className={classes.sliderContainer}>

        </div>
      );
    }
}

Slider.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Slider);