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
      light: '#000',
      main: '#edc4bd',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#60a183',
      dark: '#fff',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
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
