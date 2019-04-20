import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
  });

class Wedding extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <div>
            Wedding
        </div>
      );
    }
}

Wedding.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Wedding);