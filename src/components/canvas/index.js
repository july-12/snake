import React, { Component } from 'react'
import './index.css'

const DURATION = 1000
const STEP = 10

class Canvas extends Component {
  componentDidMount() {
    this.snakeStartMoving()
  }
  calculateMovingPos = () => {
    let { list, direction } = this.props.snakes
    let { meat } = this.props

    let newList = list.slice(1)
    let snakeHead = list[list.length - 1]
    switch (direction) {
      case 'LEFT':
        snakeHead.x -= STEP
        break
      case 'TOP':
        snakeHead.y -= STEP
        break
      case 'RIGHT':
        snakeHead.x += STEP
        break
      default:
        snakeHead.y += STEP
        break
    }
  }
  snakeStartMoving = () => {
    let t = setInterval(() => {
      let newList = calculateMovingPos()
      this.props.moving(newList)
    }, DURATION)
  }
  render() {
    return <svg>{this.props.children}</svg>
  }
}

export default Canvas
