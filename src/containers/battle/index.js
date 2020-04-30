import React from 'react'
import PT from 'prop-types'
import setBackground from 'hocs/setBackground'
import './style.css'

const renderEnemies = (enemies) =>
  enemies.map((Enemy, index) => <Enemy key={index} />)

const Battle = ({ enemies }) => {
  return (
    <div className="battle">
      <div className="half">a</div>
      <div className="half">{renderEnemies(enemies)}</div>
    </div>
  )
}

Battle.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default setBackground(Battle)
