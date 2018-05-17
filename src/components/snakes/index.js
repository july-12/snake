import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNode } from '../../actions/snakes.js'
import Pointer from '../pointer'

class Snake extends Component {
  render() {
    console.log(this.props)
    return (
      <g>
        <Pointer x="200" y="300" />
      </g>
    )
  }
}

const mapStateToProps = state => ({
  list: state.snakes.list
})

const mapDispatchToProps = dispatch => ({
  addNode: node => dispatch(addNode(node))
})

export default connect(mapStateToProps, mapDispatchToProps)(Snake)
