import React from 'react'
import './style.css'

const PartyStats = ({ party }) => {
  return (
    <div className="party-stats">
      {party.map((e) => {
        const { props } = e
        const remainingHp = (props.hp / props.maxHp) * 100
        return (
          <div key={props.id} className="stat-row">
            <p className="stat-menu-name">{props.name}</p>
            <div className="stat-menu-hp-bar">
              <div
                style={{ width: `${remainingHp}%` }}
                className="stat-menu-hp-bar-inner"
              ></div>
            </div>
            <p className="stat-menu-hp">
              {props.hp}/{props.maxHp}
            </p>
          </div>
        )
      })}
    </div>
  )
}
export default PartyStats
