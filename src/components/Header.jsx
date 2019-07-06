import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  media: {
    width: 230,
    height: 56,
    backgroundSize: "unset"
  }
});

class Header extends Component {
  render() {
    const { classes, value } = this.props;

    return (
      <header>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton edge="start"
                        color="primary"
                        aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className={classes.logoContainer}>
              <CardMedia
                className={classes.media}
                image="../images/logo_sara_marcos.svg"
                title="Fotografia de Sara y Marcos"
              />
            </div>
          </Toolbar>
        </AppBar>
        {/* <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.bgHeader}>
          <BottomNavigationAction label="Nos casamos" />
          <BottomNavigationAction label="Lugar del enlace" />
          <BottomNavigationAction label="Los invitados" />
          <BottomNavigationAction label="Galería" />
        </BottomNavigation> */}
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header);