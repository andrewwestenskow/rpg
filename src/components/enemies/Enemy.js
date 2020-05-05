import React from 'react'
import './style.css'

const Enemy = (props) => {
  return (
    <img
      onClick={() => {}}
      style={{ transform: 'scaleX(-1)', width: props.size }}
      alt="Enemy"
      className={`${props.type}-image`}
    />
  )
}

export default Enemy
