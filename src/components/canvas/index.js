import React, { Component } from 'react'
import './index.css'

class Canvas extends Component {
  render() {
    return <svg>{this.props.children}</svg>
  }
}

export default Canvas
