import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      secondary: '#999',
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
  videosContainer:{
    padding: theme.spacing.unit * 5
  },
  button:{
    width: '100%'
  }
});

const codeGuests = [
  {code:'chelo', url:'https://youtu.be/Op8bEAC76h0'},
  {code:'salva', url:'https://youtu.be/UunpgWNBaCA'},
  {code:'sera', url:'https://youtu.be/j_BH5V6ZEiM'},
  {code:'rufi', url:'https://youtu.be/JfzjuBSurOM'},
  {code:'origen', url:'https://youtu.be/gq_OfxE6Kpw'},
  {code:'chocolate', url:'https://youtu.be/gCXydUvzCaA'},
  {code:'amor', url:'https://youtu.be/HvVCy-Jmf6c'},
  {code:'mancuerna', url:'https://youtu.be/K43FpV2hZXw'},
  {code:'patorra', url:'https://youtu.be/_VpdLs8m_So'},
  {code:'barco', url:'https://youtu.be/ivvsy-KztFc'},
  {code:'amigos', url:'https://youtu.be/Z5pu2UpHVf8'},
  {code:'chiniwini', url:'https://youtu.be/iRp9KWZ_UCg'},
  {code:'love', url:'https://youtu.be/0EjZ8cRiCFU'},
  {code:'limon', url:'https://youtu.be/0EjZ8cRiCFU'},
  {code:'peru', url:'https://youtu.be/mVHlmL-Cc14'},
  {code:'martiriostar', url:'https://youtu.be/SWuE0v1d1uk'},
  {code:'raical', url:'https://youtu.be/UGDpFhZubfM'},
  {code:'chulon', url:'https://youtu.be/mSE0wKUNFEw'},
  {code:'bici amarilla', url:'https://youtu.be/b64kM6WGjQk'},
  {code:'fabril', url:'https://youtu.be/jAE0lC5WkgQ'},
  {code:'surf', url:'https://youtu.be/FvRt6W--qoM'},
  {code:'top', url:'https://youtu.be/NHCdah_AbQ8'},
  {code:'cariños', url:'https://youtu.be/iSN7zkv5gE4'},
  {code:'la salle', url:'https://youtu.be/REsJR9qE2b8'},
  {code:'lamora', url:'https://youtu.be/-67XybDU68M'},
  {code:'rizos', url:'https://youtu.be/ucTmgzomv9M'},
  {code:'profes', url:'https://youtu.be/GxiS-Gb7pE8'},
  {code:'arco', url:'https://youtu.be/0uXcoLO1b2Q'},
  {code:'mara', url:'https://youtu.be/qTEFqz6sq18'},
  {code:'carra', url:'https://youtu.be/z8L-gh-YFE0'},
  {code:'rober', url:'https://youtu.be/EJ0JmkjxkYI'},
  {code:'fabian', url:'https://youtu.be/z2eGrNQfOQ0'},
  {code:'alvaro', url:'https://youtu.be/JXLEhcma76Y'},
  {code:'adrian', url:'https://youtu.be/jAsBOXcQa7E'},
  {code:'ru', url:'https://youtu.be/GkuxrSZpez0'},
  {code:'richard', url:'https://youtu.be/ieBw5IfJezk'},
  {code:'alvaro', url:'https://youtu.be/nZmZKvWruno'},
  {code:'oscar', url:'https://youtu.be/zA--ex-j74Q'},
  {code:'javi', url:'https://youtu.be/1K8p_uQBA2Q'},
  {code:'andres', url:'https://youtu.be/fKhRr3Go2o8'}
];

class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code:'',
      url:'',
      errorCode: false
    };
    this.changeValue= this.changeValue.bind(this);
    this.sendCode= this.sendCode.bind(this);
  }


  changeValue = (e) => {
    this.setState({
      code: e.currentTarget.value
    });
    console.log(e.currentTarget.value);
  };

  sendCode = () => {
    const resultado = codeGuests.find( item => item.code === this.state.code );

    if (resultado) {
      window.open(resultado.url);
      this.setState({
        errorCode: false
      });
    } else {
      this.setState({
        errorCode: true
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { code, errorCode } = this.state;

    return (
      <form id='videoForm' autoComplete='off'
        onSubmit={(event) => {
          event.preventDefault();

          this.sendCode();
      }}>
        <MuiThemeProvider theme={themeApp}>
          <Grid id='videos' container direction="column" justify="center" className={classes.videosContainer}>
            <Grid item>
              <Typography variant="h4" color="secondary" align="center">Descubre tu sorpresa</Typography>
            </Grid>
            <Grid item>
              <Typography align="center">
                Introduce el código que te hemos facilitado con la botellita y pulsa "Enviar" para ver tu sorpresa.
              </Typography>
            </Grid>
            <Grid container alignItems="center" spacing={16}>
              <Grid item xs={6} sm={8}>
                <TextField name='name'
                  required
                  fullWidth
                  type='search'
                  label='Tu código'
                  margin='normal'
                  value={code}
                  onChange={this.changeValue}
                  error={errorCode}
                  helperText={errorCode ? 'El código que introducido no es válido, por favor introdúcelo de nuevo' : ' '}

                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Button variant='contained' color='secondary' type='submit'
                  className={classes.button}>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </form>
    );
  }
}

Videos.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Videos);
