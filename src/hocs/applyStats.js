import React, { useState } from 'react'
import HpBar from 'components/stats/HpBar'

export default (WrappedComponent) => {
  return (props) => {
    const [hp, setHp] = useState(props.hp)
    const [speed, setSpeed] = useState(props.speed)

    const stats = { hp, speed }
    const setters = { setHp, setSpeed }

    let size

    switch (props.sze) {
      case 'small':
        size = '128px'
        break
      default:
        size = '128px'
        break
    }

    const newProps = { ...props }

    delete newProps.hp
    delete newProps.speed

    return (
      <div style={{ width: size }}>
        <HpBar total={props.hp} remaining={hp} />
        <WrappedComponent
          {...newProps}
          size={size}
          stats={stats}
          setters={setters}
        />
      </div>
    )
  }
}