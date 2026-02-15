import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15 // In React ye default sabhi jgah pe update nhin krage
  let [counter, setCounter] = useState(15) // let [variable, method] = useState()

  const incressValue = () => {
    if (counter >= 0 && counter < 20) { // task counter cannot count greate than 20
      counter = counter + 1
    }
    setCounter(counter)
  }

  const decressValue = () => {
    if (counter > 0 && counter <= 20) { // task counter cannot count less than 0
      counter = counter - 1
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Increment and Decrement</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={incressValue}>Incress value {counter}</button>
      <br /> <br />
      <button onClick={decressValue}>Decress value {counter}</button>
    </>
  )
}

export default App
