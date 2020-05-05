import React from 'react'
import InteractionMenu from 'containers/interaction'
import './style.css'

export default (WrappedComponent) => {
  return (props) => (
    <div className="screen-background">
      <div className="screen-headline"></div>
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
      <div className="interaction-menu">
        <InteractionMenu nextHero={props.nextHero} party={props.party} />
      </div>
    </div>
  )
}
