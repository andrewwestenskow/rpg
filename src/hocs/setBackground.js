import React from 'react'
import './style.css'

export default (WrappedComponent) => {
  return (props) => (
    <div className="screen-background">
      <div className="screen-headline">Headline</div>
      <WrappedComponent
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          overflow: 'hidden',
          height: '70%',
          paddingBottom: '3%',
          width: '100%',
        }}
        {...props}
      />
      <div className="interaction-menu"></div>
    </div>
  )
}
