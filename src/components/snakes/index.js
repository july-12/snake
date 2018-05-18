import React from 'react'
import { connect } from 'react-redux'
import lodash from 'lodash'
import Pointer from '../pointer'
let _ = lodash

const Snake = ({ list }) => {
  return <g>{_.map(list, ({ x, y }, index) => <Pointer key={index} x={x} y={y} />)}</g>
}

const mapStateToProps = state => ({
  list: state.snakes.list
})

export default connect(mapStateToProps)(Snake)
