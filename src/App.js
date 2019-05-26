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
      light: '#ceddcc',
      main: '#bacdb7',
      dark: '#94bf96',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ddced0',
      main: '#d7b9bc',
      dark: '#d17878',
      contrastText: '#fff',
    },
    text:{ 
      primary: '#999',
      secondary: '#fff',
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
