import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  guestsContainer:{
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    margin: "auto"
  }, 
  formContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  countContainer:{
    textAlign: "center",
    border: "1px dotted white",
    margin: 10,
    padding: 20
  }
  });

class Guests extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <Grid container className={classes.guestsContainer}>
            <Grid item>
              <Typography variant="h4" color="textSecondary">Los Invitados</Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary">Aqui va el texto de la boda</Typography>
            </Grid>
            <Grid item>
              <form className={classes.formContainer}>
                <TextField
                  id="standard-name"
                  label="Nombre"
                  className={classes.textField}
                  //value={this.state.name}
                  margin="normal"
                />
                <TextField
                  id=""
                  label="Acompañantes"
                  className={classes.textField}
                  //value={this.state.name}
                  margin="normal"
                />
                <TextField
                  id="comments"
                  label="Comentarios"
                  className={classes.textField}
                  //value={this.state.name}
                  margin="normal"
                />
                <Grid item>
                  <Button variant="contained" color="primary">ENVIAR</Button>
                </Grid>
              </form>
            </Grid>
            <div className={classes.countContainer}>
              <Grid item>
                <Typography color="textSecondary">Aqui va el texto de la boda</Typography>
              </Grid>
              <Grid item>
                <Typography color="textSecondary">Número de cuenta ESXX XXXX XX XXXXXXX</Typography>
              </Grid>
            </div>
            <Grid item></Grid>
        </Grid>
      );
    }
}

Guests.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Guests);