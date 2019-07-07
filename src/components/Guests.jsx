import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Recaptcha from 'react-google-recaptcha';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  guestsContainer:{
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing.unit * 5
  },
  formContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  countContainer:{
    border: '1px dotted white',
    padding: theme.spacing.unit * 5
  }
});

class Guests extends Component {
  render() {
    const { classes, onChange } = this.props;

    let captcha;
    let form;

    return (
      <Grid container direction='column' justify='center' className={classes.guestsContainer}>
        <Grid item>
          <Typography variant='h4' color='textSecondary' align='center'>Los Invitados</Typography>
        </Grid>

        <Grid item>
          <Typography color='textSecondary' align='center'>
            Aqui va el texto de la boda
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={7}>
          <form id='contactForm' autoComplete='off' className={classes.formContainer}
            onSubmit={(event) => {
              event.preventDefault();

              form = {
                name: event.target.name.value,
                phone: event.target.phone.value,
                email: event.target.email.value,
                url: window.location.href,
                comments: event.target.comments.value
              }

              captcha.execute();
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
              label='Tu Teléfono'
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
            <Recaptcha
              ref={(el) => { captcha = el }}
              size='invisible'
              sitekey='6LfZZnAUAAAAAMSuhCLBbtihyBsey61Tues1lD7K'
              onChange={() => onChange(form)}
            />
            <Button variant='contained' color='primary' type='submit'
              className={classes.button}>
              Enviar mensaje
            </Button>
          </form>
        </Grid>

        <Grid container justify='center' className={classes.countContainer}>
          <Grid item>
            <Typography color='textSecondary'>Aqui va el texto de la boda</Typography>
          </Grid>
          <Grid item>
            <Typography color='textSecondary'>Número de cuenta ES98 1465 0100 91 1715510099</Typography>
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
