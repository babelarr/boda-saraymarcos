import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
  });

class Guests extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <div>
            Guests
        </div>
      );
    }
}

Guests.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Guests);