import React from 'react'
import './style.css'

const BattleMenu = ({ nextHero }) => {
  console.log(nextHero)
  return (
    <div className="battle-menu">
      {nextHero.attacks.map((e) => (
        <p>{e.name}</p>
      ))}
    </div>
  )
}
export default BattleMenu
