import React, { Component } from 'react'

export default class FileUpload extends Component {
  render () {
    var divStyle = { width: this.props.uploadValue + '%' }

    return (
      <div>
        <div>
          <div>
            <span>Subir imagen</span>
            <input type='file' onChange={this.props.handleUpload} />
          </div>
          <div>
            <input type='text' />
          </div>
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
