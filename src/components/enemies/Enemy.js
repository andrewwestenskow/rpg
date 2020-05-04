import React from 'react'
import PT from 'prop-types'
import applyStats from 'hocs/applyStats'
import './style.css'

const Enemy = (props) => {
  const {
    setRound,
    setters: { setHp },
  } = props

  return (
    <img
      onClick={() => {
        setHp((hp) => hp - 5)
        setRound((round) => round + 1)
      }}
      style={{ transform: 'scaleX(-1)', width: props.size }}
      alt="Enemy"
      className={`${props.type}-image`}
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
