import React, { useState, useEffect } from 'react'
import createHeroes from 'utils/createHeroes'

export default () => {
  const [party, setParty] = useState([])
  const [heroComponents, setHeroComponents] = useState([])

  useEffect(() => {
    async function getStorage() {
      return await localStorage.getItem('party')
    }
    getStorage().then((storedParty) => {
      const parsedParty = JSON.parse(storedParty)

      const partyMembers = parsedParty.map((e) => createHeroes(e))
      setParty(partyMembers)
      const components = partyMembers.map((e) => console.log(e))
    })
  }, [])

  return { party, heroComponents }
}
