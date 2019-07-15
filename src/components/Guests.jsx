import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  }
});

class Guests extends Component {

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
            Para que la organización de la boda sea perfecta, os pedimos por favor que rellenéis el siguiente formulario para confirmar vuestra asistencia.Indícanos en Comentarios quién te acompañará a la boda, si tienes algún tipo de alergia alimenticia, cualquier cosa que necesites...
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form id='contactForm' autoComplete='off' className={classes.formContainer}
            onSubmit={(event) => {
              event.preventDefault();

              form = {
                name: event.target.name.value,
                phone: event.target.phone.value,
                email: event.target.email.value,
                comments: event.target.comments.value
              }

              onChange(form);
            }}>
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

            <TextField name='comments'
              required
              fullWidth
              multiline
              rows='4'
              label='Tu Mensaje'
              margin='normal'
            />
            <Button variant='contained' color='primary' type='submit'
              className={classes.button}>
              Enviar mensaje
            </Button>
          </form>
        </Grid>

        <Grid container justify='center' className={classes.countContainer} spacing={16}>
          <Grid item>
            <Typography color='textSecondary' align='center'>A continuación te ofrecemos el número de cuenta asociado al enlace por si quieres colaborar con nuestro viaje y demás preparativos.Pero recuerda que tu presencia es nuestro mejor regalo.</Typography>
          </Grid>
          <Grid item>
            <Typography color='textSecondary' variant='title'>ES98 1465 0100 91 1715510099</Typography>
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
