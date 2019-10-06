import React, {Component} from "react";
import PropTypes from 'prop-types';
import Slider from './Slider';
import Menu from './Menu';
import Wedding from './Wedding';
import Videos from './Videos';
import Place from './Place';
import Guests from './Guests';
import Gallery from './Gallery';

import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

import fetch from 'isomorphic-fetch';

import { storage } from 'firebase/app';
import { database } from 'firebase/app';

import uuid from 'uuid';

import { withStyles } from '@material-ui/core/styles';

declare var $ : any;

const styles = theme => ({
});

const baseURL = 'https://api-rest-aksofakama.herokuapp.com/api'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      pictures: [],
      uploadValue: 0,
      resetForm: false,
      openSuccess: false,
      openError: false
    }

    this.handleUpload = this.handleUpload.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSendForm = this.handleSendForm.bind(this);
  }

  componentWillMount () {
    database().ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val())
      });
    });
  }

  handleOnChange (form) {
    this.handleSendForm(form);
  }

  async handleSendForm (form) {
    const response = await fetch(`${baseURL}/guests`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }),
      body: JSON.stringify(form)
    })
    const data = await response;

    if (response.ok) {
      this.setState({
        resetForm: true,
        openSuccess: true
      })
    } else {
      this.setState({
        resetForm: false,
        openError: true
      })
    }

    return data;
  }

  handleUpload (event) {
    const file = event.target.files[0];
    const storageRef = storage().ref(`fotos/${file.name}`);
    const task = storageRef.put(file);

    // Listener que se ocupa del estado de la carga del fichero
    task.on('state_changed', snapshot => {
      // Calculamos el porcentaje de tamaño transferido y actualizamos
      // el estado del componente con el valor
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadValue: percentage,
        loading: true
      });
    }, error => {
      // Ocurre un error
      console.error(error.message);
    }, () => {
      this.setState({
        loading: false
      });

      // Subida completada
      // Obtenemos la URL del fichero almacenado en Firebase storage
      // Obtenemos la referencia a nuestra base de datos 'pictures'
      // Creamos un nuevo registro en ella
      // Guardamos la URL del enlace en la DB
      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        const record = {
          key: uuid.v4(),
          displayName: 'Foto compartida',
          image: downloadURL
        };

        const dbRef = database().ref('pictures');
        const newPicture = dbRef.push();
        newPicture.set(record);
      });
    });
  }

  handleCloseSuccess = () => {
    this.setState({ openSuccess: false });
  };

  handleCloseError = () => {
    this.setState({ openError: false });
  };

  render() {
    //const { classes } = this.props;

    $(document).ready(function () {
      var date = new Date(2019, 9, 12, 13)
      $('#defaultCountdown').countdown({until: date});
    });

    return (
      <main>
        <Snackbar
          open={this.state.openSuccess}
          onClose={this.handleCloseSuccess}
          TransitionComponent={Fade}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Mensaje enviado correctamente!</span>}
        />
        <Snackbar
          open={this.state.openError}
          onClose={this.handleCloseError}
          TransitionComponent={Fade}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Se ha producido un error. Inténtalo más tarde.</span>}
        />
        <div id='defaultCountdown' />
        <Slider/>
        <Videos/>
        <Menu/>
        <Wedding/>
        <Place/>
        <Guests onChange={this.handleOnChange} resetForm={this.state.resetForm}/>
        <Gallery loading={this.state.loading} handleUpload={this.handleUpload} uploadValue={this.state.uploadValue} pictures={this.state.pictures}/>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main);
