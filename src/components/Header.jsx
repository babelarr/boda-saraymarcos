import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  },
  links: {
    color: "unset",
    textDecoration: "unset",
    width: '100%',
    height: '100%'
  }
});

class Header extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <header>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton aria-label="Menu"
                        aria-owns={open ? 'long-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}><a href="#wedding" className={classes.links}>Nos casamos</a></MenuItem>
              <MenuItem onClick={this.handleClose}><a href="#place" className={classes.links}>¿Dónde vamos?</a></MenuItem>
              <MenuItem onClick={this.handleClose}><a href="#guests" className={classes.links}>Los invitados</a></MenuItem>
              <MenuItem onClick={this.handleClose}><a href="#gallery" className={classes.links}>Galería</a></MenuItem>
            </Menu>
            <div className={classes.logoContainer}>
              <CardMedia
                className={classes.media}
                image="../images/logo_sara_marcos.svg"
                title="Fotografia de Sara y Marcos"
              />
            </div>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header);
