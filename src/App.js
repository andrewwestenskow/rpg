import React from 'react'
import Battle from 'containers/battle'
import futureCity from 'assets/backgrounds/futureCity.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <Battle enemies={['ghost', 'ghost', 'ghost']} background={futureCity} />
    </div>
  )
}

export default App
