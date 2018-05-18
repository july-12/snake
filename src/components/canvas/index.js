import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moving, changeDirection, directionType } from '../../actions/snakes.js'
import './index.css'

const DURATION = 200
const STEP = 10

class Canvas extends Component {
  componentDidMount() {
    this.snakeStartMoving()
    this.keyBind()
  }
  calcNextMoving = () => {
    let { list, direction } = this.props.snakes
    let { meat } = this.props

    let head = { ...list[list.length - 1] }
    let [, ...tail] = list
    switch (direction) {
      case directionType.LEFT:
        head.x -= STEP
        break
      case directionType.TOP:
        head.y -= STEP
        break
      case directionType.RIGHT:
        head.x += STEP
        break
      default:
        head.y += STEP
        break
    }
    return tail.concat(head)
  }
  snakeStartMoving = () => {
    this.t = setInterval(() => {
      let newList = this.calcNextMoving()
      this.props.dispatch(moving(newList))
    }, DURATION)
  }
  checkIsValidateArrowKey = keyCode => {
    let { direction } = this.props.snakes
    let isArrowKey = Object.values(directionType).indexOf(keyCode) > -1
    //checking sum of keycode and direction is odd
    let isValid = (direction + keyCode) % 2 === 1
    return isArrowKey && isValid
  }
  handleKeyUp = e => {
    if (this.checkIsValidateArrowKey(e.keyCode)) {
      this.props.dispatch(changeDirection(e.keyCode))
    }
  }
  keyBind = () => {
    document.addEventListener('keyup', this.handleKeyUp)
  }
  render() {
    return <svg>{this.props.children}</svg>
  }
}

const mapStateToProps = state => ({
  snakes: state.snakes,
  meat: state.meat
})

export default connect(mapStateToProps)(Canvas)
