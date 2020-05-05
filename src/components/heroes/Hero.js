import React from 'react'

import './style.css'

const Hero = (props) => {
  return (
    <img
      onClick={() => {}}
      style={{ maxWidth: '128px', maxHeight: '128px' }}
      alt={props.class}
      className={`${props.class}-idle`}
    />
  )
}
export default Hero
