import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moving, changeDirection, eatMeat, directionType } from '../../actions/snake.js'
import { randomMeat } from '../../actions/meat.js'
import lodash from 'lodash'
import './index.css'
let _ = lodash

const STEP = 10

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.svgRef = React.createRef()
  }
  componentDidMount() {
    this.snakeStartMoving()
    this.keyBind()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.rate !== this.props.rate) {
      this.snakeStartMoving(nextProps)
    }
  }
  checkGameOver = nextList => {
    return _.unionWith(nextList, _.isEqual).length !== nextList.length
  }
  hasEatenMeat = nextList => {
    let { meat } = this.props
    let head = nextList[nextList.length - 1]
    return _.isEqual(head, meat)
  }
  calcNextMoving = () => {
    let { width, height } = this.svgRef.current.getBoundingClientRect()
    let { list, direction } = this.props.snake
    let head = { ...list[list.length - 1] }
    let [, ...tail] = list

    switch (direction) {
      case directionType.LEFT:
        head.x -= STEP
        if (head.x < 0) {
          head.x = width - STEP
        }
        break
      case directionType.TOP:
        head.y -= STEP
        if (head.y < 0) {
          head.y = height - STEP
        }
        break
      case directionType.RIGHT:
        head.x += STEP
        if (head.x >= width) {
          head.x = 0
        }
        break
      default:
        head.y += STEP
        if (head.y > height) {
          head.y = 0
        }
        break
    }
    return tail.concat(head)
  }
  snakeStartMoving = ({ rate } = this.props) => {
    if (this.t) {
      clearInterval(this.t)
    }
    this.t = setInterval(() => {
      let nextList = this.calcNextMoving()
      if (this.checkGameOver(nextList)) {
        clearInterval(this.t)
        return alert('game over')
      } else if (this.hasEatenMeat(nextList)) {
        let { list } = this.props.snake
        let { meat } = this.props

        let { width, height } = this.svgRef.current.getBoundingClientRect()

        let x = _.random(width / 10 - 1) * 10
        let y = _.random(height / 10 - 1) * 10

        this.props.dispatch(eatMeat(list.concat(meat)))
        this.props.dispatch(randomMeat({ x, y }))
      } else {
        this.props.dispatch(moving(nextList))
      }
    }, rate)
  }
  checkIsValidateArrowKey = keyCode => {
    let { direction } = this.props.snake
    let isArrowKey = Object.values(directionType).indexOf(keyCode) > -1
    //can't change direction on same pathway
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
    return <svg ref={this.svgRef}>{this.props.children}</svg>
  }
}

const mapStateToProps = state => ({
  snake: state.snake,
  meat: state.meat,
  rate: state.speed.rate
})

export default connect(mapStateToProps)(Canvas)
