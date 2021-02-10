
import React from 'react'
import './App.css';
import cards from './cards'
import vacationSpots from './vacationSpots'
   
function App() {
  const vacations = vacationSpots.map(spot => <place key= {cards.place} price={cards.price} punctimeToGo={cards.timeToGo} />)
  
  return (
      <div>
          {vacations}            
      </div>
  )
}

export default App

