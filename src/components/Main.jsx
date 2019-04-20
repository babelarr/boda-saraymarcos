import React, {Component} from "react";
import PropTypes from 'prop-types';
import Slider from './Slider';
import Menu from './Menu';
import Wedding from './Wedding';
import Place from './Place';
import Guests from './Guests';
import Gallery from './Gallery';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bgMain: {
       backgroundColor: "lightBlue"
   } 
  });

class Main extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <main className={classes.bgMain}>
            <Slider/>
            <Menu/>
            <Wedding/>
            <Place/>
            <Guests/>
            <Gallery/>
        </main>
      );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Main);