import React from 'react'
import HpBar from 'components/stats/HpBar'
import './style.css'

const Enemy = (props) => {
  return (
    <>
      <div style={{ width: props.size }}>
        <HpBar total={props.maxHp} remaining={props.hp} />
        <img
          onClick={() => {}}
          style={{ transform: 'scaleX(-1)', width: props.size }}
          alt="Enemy"
          className={`${props.type}-image`}
        />
      </div>
    </>
  )
}

export default Enemy
