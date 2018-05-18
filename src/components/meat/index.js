import React from 'react'
import { connect } from 'react-redux'
import Pointer from '../pointer'

const Meat = props => {
  return <Pointer {...props.pos} className={props.className} />
}

const mapStateToProps = state => ({
  pos: state.meat,
  className: 'keeping'
})

export default connect(mapStateToProps)(Meat)
