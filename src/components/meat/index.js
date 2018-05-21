import React from 'react'
import { connect } from 'react-redux'
import Pointer from '../pointer'

const Meat = ({ x, y }) => {
  return <Pointer className="blink" x={x} y={y} />
}

const mapStateToProps = state => ({
  x: state.meat.x,
  y: state.meat.y
})

export default connect(mapStateToProps)(Meat)
