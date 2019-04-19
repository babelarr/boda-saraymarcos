import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bgHeader: {
       backgroundColor: "pink"
   } 
  });

class Header extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <header className={classes.bgHeader}>
            <div>
                Cabecera
            </div>
        </header>
        
      );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Header);