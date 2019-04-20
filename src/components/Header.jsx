import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Typography } from "@material-ui/core";

const styles = theme => ({
    bgHeader: {
      backgroundColor: "#ffcccc",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      color: "white"
   } 
  });

class Header extends Component {
    render() {
      const { classes, value } = this.props;
  
      return (
        <header className={classes.bgHeader}>
          <Typography>
            Sara y Marcos
          </Typography>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.bgHeader}>
            <BottomNavigationAction label="Nos casamos" />
            <BottomNavigationAction label="Lugar del enlace" />
            <BottomNavigationAction label="Los invitados" />
            <BottomNavigationAction label="Galería" />
          </BottomNavigation>
        </header>
      );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Header);