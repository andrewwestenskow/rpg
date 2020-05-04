import React, { useState, useEffect } from 'react'
import BattleContainer from 'containers/battle'
import futureCity from 'assets/backgrounds/futureCity.png'
import './App.css'

function App() {
  const [party, setParty] = useState([])

  useEffect(() => {
    const fetchedParty = localStorage.getItem('party')
    if (fetchedParty) {
      setParty(JSON.parse(fetchedParty))
    }
  }, [])
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="App">
      {party.length && (
        <BattleContainer
          party={party}
          enemies={['ghost', 'vampire', 'ghost']}
          background={futureCity}
        />
      )}
    </div>
  )
}

export default App
