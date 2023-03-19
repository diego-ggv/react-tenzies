import {useState} from 'react'
import './App.css'
import Die from './components/Die.jsx';

function App() {

  // const handleRoll = () => {
  //   const roll = Math.floor(Math.random() * 6) + 1
  //   console.log(roll)
  //   return roll 
  // }

  const allNewDice = () => {
    const [diceValues, setDiceValues] = useState([])

    const rollAllDice = () => {
      const newDiceRolls = Array.from({length: 10}, () => Math.floor(Math.random() * 6) + 1)
      setDiceValues(newDiceRolls)
    }
  }

  
  
  return (
      <main className="App">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice--container">
          <Die value={1}/>
          <Die value={2}/>
          <Die value={3}/>
          <Die value={4}/>
          <Die value={5}/>
          <Die value={6}/>
          <Die value={1}/>
          <Die value={2}/>
          <Die value={3}/>
          <Die value={4}/>
        </div>
        <button onClick={roll}>Roll</button>
      </main>
  )
}

export default App
