import React from 'react'
import './index.css'

export default ({ x, y, className }) => {
  return <rect className={`pointer ${className || ''}`} x={x} y={y} />
}
