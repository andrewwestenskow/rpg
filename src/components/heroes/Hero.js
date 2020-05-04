import React from 'react'
import applyStats from 'hocs/applyStats'
import './style.css'

const Hero = (props) => {
  return (
    <img
      style={{ maxWidth: props.size, maxHeight: props.size }}
      alt={props.type}
      className={`${props.type}-idle`}
    />
  )
}
export default applyStats(Hero)
