import React from 'react'
import PT from 'prop-types'
import './style.css'

const HpBar = ({ total, remaining }) => {
  const percentageLeft = (remaining / total) * 100

  return (
    <div className="hp-bar">
      <div
        style={{ width: `${percentageLeft}%` }}
        className="hp-remaining"
      ></div>
      <p className="hp-text">
        {remaining}/{total}
      </p>
    </div>
  )
}

HpBar.propTypes = {
  total: PT.number.isRequired,
  remaining: PT.number.isRequired,
}

export default HpBar
