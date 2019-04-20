import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bgFooter: {
       backgroundColor: "green"
   } 
  });

class Footer extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <footer className={classes.bgFooter}>
            <div>
                Footer
            </div>
        </footer>
      );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Footer);