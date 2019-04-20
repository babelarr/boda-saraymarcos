import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
  });

class Slider extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <div>
            Slider
        </div>
      );
    }
}

Slider.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Slider);