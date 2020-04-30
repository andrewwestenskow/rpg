import React from 'react'

export default (WrappedComponent) => {
  return (props) => (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
        height: '100vh',
        width: '100vw',
        backgroundSize: 'contain',
      }}
    >
      <WrappedComponent {...props} />
    </div>
  )
}
