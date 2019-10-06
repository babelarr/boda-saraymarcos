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

class Videos extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={themeApp}>
        <Grid id='videos' container direction="column" justify="center" className={classes.videosContainer}>
          <Grid item>
            <Typography variant="h4" color="secondary" align="center">Descubre tu sorpresa</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">
              Introduce el código que te hemos facilitado con la botellita y pulsa Enviar para ver tu sorpresa.
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
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant='contained' color='secondary' type='submit'
                className={classes.button}>
                Descubrir
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

Videos.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Videos);
