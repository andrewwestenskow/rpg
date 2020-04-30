import React from 'react'
import PT from 'prop-types'
import setBackground from 'hocs/setBackground'
import calculateStats from 'utils/calculateStats'
import './style.css'

const renderEnemies = (enemies, level) =>
  enemies.map((enemy, index) => {
    return calculateStats(level, enemy, index)
  })

const Battle = ({ enemies }) => {
  return (
    <div className="battle">
      <div className="half"></div>
      <div className="half">{renderEnemies(enemies, 1)}</div>
    </div>
  )
}

Battle.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default setBackground(Battle)
