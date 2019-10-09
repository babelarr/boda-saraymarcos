import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const themeApp = createMuiTheme({
  palette: {
    default: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
  secondary: {
    light: '#fff',
    main: '#fff',
    dark: '#fff',
    contrastText: '#fff',
  },
  text:{
    primary: '#fff',
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
}
});

const styles = theme => ({
  guestsContainer:{
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing.unit * 5
  },
  formContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 4,
    width: '100%'
  },
  countContainer:{
    border: '1px dotted white',
    padding: theme.spacing.unit * 5
  },
  formControl: {
    marginTop: theme.spacing.unit * 4,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Guests extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valueCompanion: 'no',
      valueChildren: 'no'
    };
  }
  handleChangeCompanion = event => {
      this.setState({ valueCompanion: event.target.value });
    };
  handleChangeChildren = event => {
        this.setState({ valueChildren: event.target.value });
      };
  componentWillReceiveProps(nextProps) {
    if (nextProps.resetForm) {
        document.getElementById('contactForm').reset();
    }
  }

  render() {
    const { classes, onChange } = this.props;

    let form;

    return (
      <Grid id='guests' container justify='center' alignItems="center" className={classes.guestsContainer}>
        <Grid item xs={12}>
          <Typography variant='h4' color='textSecondary' align='center'>Los Invitados</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography color='textSecondary' align='center'>
            Para que la organización de la boda sea perfecta, os pedimos por favor que rellenéis el siguiente formulario para confirmar vuestra asistencia. Indícanos en Comentarios si tienes algún tipo de alergia alimenticia o cualquier cosa que necesites hacernos saber...
          </Typography>
        </Grid>
          <Grid item xs={12} >
            <form id='contactForm' autoComplete='off' className={classes.formContainer}
              onSubmit={(event) => {
                event.preventDefault();

                let _nameCompanion = '';
                let _nameChildren = '';

                if (event.target.companion.value === 'si') {
                  _nameCompanion = event.target.nameCompanion.value
                }

                if (event.target.children.value === 'si') {
                  _nameChildren = event.target.nameChildren.value
                }

                form = {
                  name: event.target.name.value,
                  phone: event.target.phone.value,
                  email: event.target.email.value,
                  comments: event.target.comments.value,
                  companion: event.target.companion.value,
                  children: event.target.children.value,
                  nameCompanion: _nameCompanion,
                  nameChildren: _nameChildren
                }

                onChange(form);
              }}>
              <MuiThemeProvider theme={themeApp}>
                <Grid container direction='column' justify='flex-start' alignItems="flex-start">
                  <TextField name='name'
                    required
                    fullWidth
                    type='search'
                    label='Tu Nombre'
                    margin='normal'
                  />
                  <TextField name='phone'
                    fullWidth
                    label='Tu Teléfono (opcional)'
                    margin='normal'
                  />
                  <TextField name='email'
                    required
                    fullWidth
                    type='email'
                    label='Tu Email'
                    margin='normal'
                  />

                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">¿Vienes acompañado?</FormLabel>
                    <RadioGroup
                      aria-label="companion"
                      name="companion"
                      value={this.state.valueCompanion}
                      onChange={this.handleChangeCompanion}
                    >
                      <FormControlLabel value="si" control={<Radio />} label="Si"/>
                      <FormControlLabel value="no" control={<Radio />} label="No"/>
                    </RadioGroup>
                  </FormControl>

                  {
                    this.state.valueCompanion === 'si' &&
                    <TextField name='nameCompanion'
                      required
                      fullWidth
                      type='search'
                      label='Nombre acompañante/s'
                      margin='normal'
                    />
                  }

                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">¿Y con niños?</FormLabel>
                    <RadioGroup
                      aria-label="Children"
                      name="children"
                      value={this.state.valueChildren}
                      onChange={this.handleChangeChildren}
                    >
                      <FormControlLabel value="si" control={<Radio />} label="Si"/>
                      <FormControlLabel value="no" control={<Radio />} label="No"/>
                    </RadioGroup>
                  </FormControl>

                  {
                    this.state.valueChildren === 'si' &&
                    <TextField name='nameChildren'
                      required
                      fullWidth
                      type='search'
                      label='Nombre niño/s'
                      margin='normal'
                    />
                  }

                  <TextField name='comments'
                    required
                    fullWidth
                    multiline
                    rows='4'
                    label='Comentarios'
                    margin='normal'
                  />
                </Grid>
              </MuiThemeProvider>

              <Button variant='contained' color='primary' type='submit'
                className={classes.button}>
                Enviar mensaje
              </Button>
            </form>
        </Grid>


        <Grid container justify='center' className={classes.countContainer} spacing={16} direction='column'>
          <Grid item>
            <Typography color='textSecondary' variant='h6' align='center'>LISTA DE BODA SARA Y MARCOS</Typography>
          </Grid>
          <Grid item>
            <Typography color='textSecondary' align='center'>Estamos construyendo nuestro nido... ¿Nos ayudas con una ramita?</Typography>
          </Grid>
          <Grid item>
            <Typography color='textSecondary' variant='h6' align='center'>ES98 1465 0100 91 1715510099</Typography>
          </Grid>
          <Grid item>
            <Typography color='textSecondary' align='center'>¡¡Muchas gracias!!</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Guests.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

export default withStyles(styles)(Guests);
