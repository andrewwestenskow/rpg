import React from 'react'
import setBackground from 'hocs/setBackground'
import './style.css'

const Battle = ({ style, party, enemies, round, battleOrder }) => {
  return (
    <div style={style} className="battle">
      <div className="half">{party}</div>
      <div className="half">{enemies}</div>
      <div className="turn-order">
        <p>Round: {round}</p>
        {battleOrder.map((enemy, index) => (
          <p key={index}>{enemy.name}</p>
        ))}
      </div>
    </div>
  )
}
export default setBackground(Battle)
