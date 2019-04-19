import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bgMain: {
       backgroundColor: "blue"
   } 
  });

class Main extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <main className={classes.bgMain}>
            <div>
                Contenido
            </div>
        </main>
      );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Main);