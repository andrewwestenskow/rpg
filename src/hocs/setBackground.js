import React from 'react'
import './style.css'

export default (WrappedComponent) => {
  return (props) => (
    <div
      className="screen-background"
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <WrappedComponent {...props} />
    </div>
  )
}
