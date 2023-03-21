import {useState, useEffect} from 'react'
import Die from './components/Die.jsx';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti'
import './App.css'

/*
 Todo: 
  - put dots on the dice 
  - track the number of rolls
  - track the time it took to win
  - save best time to localStorage
  - comment all my code
 */

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const isTenzies = dice.every(
        die => die.value === dice[0].value && die.isHeld,
    )
    isTenzies && setTenzies(true);
  }, [dice])

  function generateNewDie() {
    const ranNum = Math.floor(Math.random() * 6) + 1
    return {
      id: nanoid(),
      value: ranNum,
      isHeld: false,
    }
  }

  function allNewDice() {
    const arrRandomNum = Array.from({length: 10},
        () => Math.floor(Math.random() * 6) + 1)

    return arrRandomNum.map(() => generateNewDie())
  }

  function handleRoll() {
    setDice(prevState => {
      return prevState.map(die => {
        return die.isHeld ? die : generateNewDie()
      })
    })
  }

  function holdDice(id) {
    setDice(prevState => (
        prevState.map(die => (
            die.id === id ? {...die, isHeld: !die.isHeld} : die
        ))))
  }

  const newGame = () => {
    setDice(allNewDice)
    setTenzies(false)
  }

  const DisplayAllDice = dice.map(die => (
      <Die
          key={die.id}
          value={die.value}
          isHeld={die.isHeld}
          hold={() => holdDice(die.id)}
      />
  ))

  return (
      <main className="App">
        {tenzies && <Confetti/>}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice--container">
          {DisplayAllDice}
        </div>
        <button className="roll" onClick={tenzies ? newGame : handleRoll}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </main>
  )
}

export default App
