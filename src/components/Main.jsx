import React, {Component} from "react";
import PropTypes from 'prop-types';
import Slider from './Slider';
import Menu from './Menu';
import Wedding from './Wedding';
import Place from './Place';
import Guests from './Guests';
import Gallery from './Gallery';

import { withStyles } from '@material-ui/core/styles';

declare var $ : any

const styles = theme => ({
  containerSliderMenu: {

  }
});

class Main extends Component {
    render() {
      const { classes } = this.props;
      $(document).ready(function () {
        var date = new Date(2019, 9, 12, 13)
        $('#defaultCountdown').countdown({until: date})
      })
      return (
        <main className={classes.bgMain}>
            <div className={classes.containerSliderMenu}>
              <div id='defaultCountdown' />
              <Slider/>
              <Menu/>
            </div>
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