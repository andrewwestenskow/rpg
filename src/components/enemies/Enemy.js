import React from 'react'
import PT from 'prop-types'
import applyStats from 'hocs/applyStats'

const Enemy = (props) => {
  const {
    takeTurn,
    stats: { hp },
    setters: { setHp },
  } = props
  return (
    <img
      onClick={() => {
        setHp(hp - 5)
        takeTurn()
      }}
      style={{ transform: 'scaleX(-1)', width: props.size }}
      alt="Enemy"
      src={props.image}
    />
  )
}

Enemy.propTypes = {
  stats: PT.shape({
    hp: PT.number.isRequired,
    speed: PT.number.isRequired,
  }),
}

export default applyStats(Enemy)
