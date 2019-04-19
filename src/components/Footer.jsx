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
        <main className={classes.bgFooter}>
            <div>
                Pie de página
            </div>
        </main>
      );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Footer);