import React from 'react'
import PT from 'prop-types'
import setBackground from 'hocs/setBackground'
import calculateStats from 'utils/calculateStats'
import './style.css'

const renderEnemies = (enemies) =>
  enemies.map((enemy, index) => {
    return calculateStats(1, enemy, index)
  })

const Battle = ({ enemies }) => {
  return (
    <div className="battle">
      <div className="half"></div>
      <div className="half">{renderEnemies(enemies)}</div>
    </div>
  )
}

Battle.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default setBackground(Battle)
