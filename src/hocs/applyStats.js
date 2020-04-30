import React, { useState } from 'react'

export default (WrappedComponent) => {
  return (props) => {
    const [hp, setHp] = useState(props.hp)
    const [speed, setSpeed] = useState(props.speed)

    const stats = { hp, speed }
    const setters = { setHp, setSpeed }

    console.log(props)
    return (
      <WrappedComponent level={props.level} stats={stats} setters={setters} />
    )
  }
}
