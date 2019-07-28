import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const themeApp = createMuiTheme({
  palette: {
    default: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    primary: {
      light: '#ceddcc',
      main: '#bacdb7',
      dark: '#94bf96',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f6c7b3',
      main: '#f59678',
      dark: '#f26949',
      contrastText: '#fff',
    },
    text:{
      primary: '#999',
      secondary: '#fff',
      default: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Josefin Sans',
      'sans-serif'
    ],
    fontSize: 16
  },
});

const styles = theme => ({
  fab:{
    position: 'fixed',
    bottom: 20,
    right: 30,
    zIndex: 99,
  }
});


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  topFunction () {
    document.body.scrollTop = 0 // Para Chrome, Safari y Opera
    document.documentElement.scrollTop = 0 // Para IE y Firefox
  }

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={themeApp}>
            <Header />
            <Main />
            <Footer />
            <Fab color="secondary" aria-label="Edit" className={classes.fab} onClick={this.topFunction} id='myBtn'>
              <Icon>arrow_upward</Icon>
            </Fab>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
