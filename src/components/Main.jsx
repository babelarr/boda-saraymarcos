import React, {Component} from "react";
import PropTypes from 'prop-types';
import Slider from './Slider';
import Menu from './Menu';
import Wedding from './Wedding';
import Place from './Place';
import Guests from './Guests';
import Gallery from './Gallery';

import Nodemailer from 'nodemailer';

import { storage } from 'firebase/app';
import { database } from 'firebase/app';

import uuid from 'uuid';

import { withStyles } from '@material-ui/core/styles';

declare var $ : any;

const styles = theme => ({
});

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      pictures: [],
      uploadValue: 0
    }

    this.handleUpload = this.handleUpload.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this);
  }

  componentWillMount () {
    database().ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val())
      });
    });
  }

  handleOnChange (form) {
    this.handleOnFormSubmit(form);
  }

  handleOnFormSubmit (form) {
    console.log(form.body);

    const transporter = Nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'saraymarcos.love@gmail.com',
        pass: 'Albondis19'
      }
    });

    const textEmail = `
      Nombre: ${form.body.name}
      Teléfono: ${form.body.phone}
      Email: ${form.body.email}
      URL de contacto: ${form.body.url}
      Comentarios: ${form.body.comments}
    `

    const mailOptions = {
      from: `${form.body.email}`,
      to: 'saraymarcos.love@gmail.com',
      subject: `${form.body.name}`,
      replyTo: `${form.body.email}`,
      text: textEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(`Error al enviar el formulario: ${err}`, err);
      } else {
        console.log('Email enviado! ' + info.response);
      }
    });
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

  render() {
    //const { classes } = this.props;

    $(document).ready(function () {
      var date = new Date(2019, 9, 12, 13)
      $('#defaultCountdown').countdown({until: date});
    });

    return (
      <main>
        <div id='defaultCountdown' />
        <Slider/>
        <Menu/>
        <Wedding/>
        <Place/>
        <Guests onChange={this.handleOnChange}/>
        <Gallery loading={this.state.loading} handleUpload={this.handleUpload} uploadValue={this.state.uploadValue} pictures={this.state.pictures}/>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main);
