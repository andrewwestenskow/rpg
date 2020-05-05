import React from 'react'
import BattleMenu from 'components/BattleMenu'
import PartyStats from 'components/PartyStats'

const InteractionMenu = (props) => {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex' }}>
      <PartyStats party={props.party} />
      <BattleMenu nextHero={props.nextHero} />
    </div>
  )
}
export default InteractionMenu
