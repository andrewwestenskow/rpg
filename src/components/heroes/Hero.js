import React from 'react'

import './style.css'

const Hero = (props) => {
  console.log(props)
  return (
    <img
      onClick={() => {}}
      style={{ maxWidth: '128px', maxHeight: '128px' }}
      alt={props.type}
      className={`${props.class}-idle`}
    />
  )
}
export default Hero
