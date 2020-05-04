import React from 'react'
import './style.css'

export default (WrappedComponent) => {
  const mageStarter = {
    id: 1,
    name: 'Mage',
    type: 'mage',
    level: 1,
    hp: 100,
    speed: 50,
    size: 'small',
  }
  const setParty = () =>
    localStorage.setItem('party', JSON.stringify([mageStarter]))

  return (props) => (
    <div className="screen-background">
      <div className="screen-headline">
        <button onClick={setParty}>Set party</button>
        <button onClick={() => localStorage.clear()}>Clear</button>
      </div>
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
