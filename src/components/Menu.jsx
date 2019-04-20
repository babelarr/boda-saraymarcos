import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
  });

class Menu extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <div>
            Menu
        </div>
      );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Menu);