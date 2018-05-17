import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNode } from '../../actions/snakes.js'

class Snake extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        snake list
        <button onClick={() => this.props.addNode('tan')}>AddNode </button>
      </div>
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
