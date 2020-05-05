import React from 'react'
import BattleContainer from 'containers/battle'
import futureCity from 'assets/backgrounds/futureCity.png'
import './App.css'

function App() {
  const mageStarter = { class: 'mage', stats: ['Mage man'] }
  const storeParty = () =>
    localStorage.setItem('party', JSON.stringify([mageStarter]))
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="App">
      <button onClick={storeParty}>Set party</button>
      <button onClick={() => localStorage.clear()}>Clear</button>

      <BattleContainer
        enemies={['ghost', 'vampire', 'ghost']}
        background={futureCity}
      />
    </div>
  )
}

export default App
