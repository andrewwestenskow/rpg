import React from 'react'
import './style.css'

const PartyStats = ({ party }) => {
  return (
    <div className="party-stats">
      {party.map((e) => {
        const { props } = e
        return (
          <div key={props.id} className="stat-row">
            <p>{props.name}</p>
          </div>
        )
      })}
    </div>
  )
}
export default PartyStats
