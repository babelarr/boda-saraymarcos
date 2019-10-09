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
      openError: false,
      inTimeWedding: true,
      inTimeVideos: false
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

    const today = new Date();
    const dateWedding = new Date(2019, 9, 12, 13);
    const dateVideos = new Date(2019, 9, 13, 9);

    if (today > dateWedding) {
      this.setState({
          inTimeWedding: false
      });
    }

    if (today > dateVideos) {
      this.setState({
          inTimeVideos: true
      });
    }
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

        {
          this.state.inTimeWedding ?
          <div id='defaultCountdown' />
          :
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Josefin Sans", "sans-serif"',
            fontSize: '1.25rem',
            backgroundColor: '#BACDB7',
            color: 'white',
            height: '64px',
            padding: '0.8rem',
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)'
          }}>
            💖💖💖 RECIÉN CASADOS 💖💖💖
          </div>
        }

        <Slider/>

        {
          this.state.inTimeVideos &&
          <Videos/>
        }

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
