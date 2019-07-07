import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  inputButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    textAlign: 'right',
    filter: 'alpha(opacity=0)',
    opacity: 0,
    outline: 'none',
    cursor: 'inherit',
    display: 'block'
  }
});


class FileUpload extends Component {
  render () {
    const { classes } = this.props;

    let divStyle = { width: this.props.uploadValue + '%' }

    return (
      <div>
        <div>
          <Button variant='contained'>
            Subir imagen
            <input type='file' onChange={this.props.handleUpload} className={classes.inputButton}/>
          </Button>

        </div>
        {
          this.props.uploadValue ?
          <div>
            <div style={divStyle} />
          </div>
          : ''
        }
      </div>
    )
  }
}

FileUpload.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FileUpload);
