import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const themeApp = createMuiTheme({
  palette: {
    primary: {
      light: '#dddddd',
      main: '#ff0000',
      dark: '#cc0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#dddddd',
      main: '#BACDB7',
      dark: '#00cc00',
      contrastText: '#fff',
    },
    text:{ 
      primary: '#333',
      secondary: '#00ff00',
      disabled: '#cccccc',
      hint: 'dddddd'
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={themeApp}>
            <Header />
            <Main />
            <Footer />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default App;
