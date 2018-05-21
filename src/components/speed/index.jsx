import React from 'react'
import { connect } from 'react-redux'
import { RATE, changeSpeed } from '../../actions/speed.js'
import './index.css'

const Speed = ({ rate, onChangeSpeed }) => {
  let keys = Object.keys(RATE)
  let isActive = level => {
    return RATE[level] === rate
  }
  return (
    <div className="speed-wrap">
      {keys.map(level => (
        <span
          key={level}
          className={`level ${isActive(level) ? 'active' : ''}`}
          onClick={() => onChangeSpeed(RATE[level])}
        >
          {level}
        </span>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  rate: state.speed.rate
})
const mapDisaptchToProps = dispatch => ({
  onChangeSpeed: rate => dispatch(changeSpeed(rate))
})
export default connect(mapStateToProps, mapDisaptchToProps)(Speed)
