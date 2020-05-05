import { useState, useEffect } from 'react'
import asyncLocalStorage from 'utils/asyncLocalStorage'
import createHeroes from 'utils/createHeroes'
import calculateStats from 'utils/calculateStats'

export default (enemyList, level) => {
  const [enemiesStarter] = useState(enemyList)
  const [round, setRound] = useState(0)
  const [participants, setParticipants] = useState({ party: [], enemies: [] })
  const [xpEarned, setXpEarned] = useState(0)

  const takeTurn = () => {
    setRound((prev) => prev + 1)
  }

  useEffect(() => {
    asyncLocalStorage.get('party', JSON.parse).then((res) => {
      const party = res.map((e) => createHeroes(e))
      const enemies = enemiesStarter.map((enemy) =>
        calculateStats(level, enemy)
      )
      setParticipants({ party, enemies })
    })
  }, [enemiesStarter, level])

  const damageEnemy = (id, amount, status) => {
    const tempEnemies = [...participants.enemies]
    let index = null

    const target = tempEnemies.find((e, i) => {
      if (e.id === id) {
        index = i
        return e
      } else {
        return false
      }
    })
    target.hp -= amount
    status && target.status.push(status)

    if (target.hp > 0) {
      tempEnemies[index] = target
      setParticipants((prev) => ({ ...prev, enemies: tempEnemies }))
    } else {
      setXpEarned((prev) => prev + target.xp)
      tempEnemies.splice(index, 1)
      setParticipants((prev) => ({ ...prev, enemies: tempEnemies }))
    }

    takeTurn()
  }

  const damageHero = (id, amount, status) => {
    const tempParty = [...participants.party]
    let index = null

    const target = tempParty.find((e, i) => {
      if (e.id === id) {
        index = i
        return e
      } else {
        return false
      }
    })

    target.takeDamage(amount)
    status && target.status.push(status)

    tempParty[index] = target
    setParticipants((prev) => ({ ...prev, party: tempParty }))

    takeTurn()
  }

  const loading = !participants.party.length

  return {
    participants,
    loading,
    round,
    takeTurn,
    damageEnemy,
    damageHero,
    xpEarned,
  }
}
