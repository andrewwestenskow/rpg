import React from 'react'
import calculateStats from 'utils/calculateStats'

const RenderEnemies = ({ enemies, takeTurn }) => {
  const renderEnemies = () => null
  const enemyComponents = renderEnemies(enemies, 1)
  return <>{enemyComponents}</>
}
export default RenderEnemies
