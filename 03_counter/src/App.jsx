import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15 // In React ye default sabhi jgah pe update nhin krage so useState Variable use hota hai

  const incressValue = () => {
    setCounter(preCounter => preCounter + 1)
  }

  const decressValue = () => {
    setCounter(preCounter => preCounter - 1)
  }

  return (
    <>
      <h1>Goku & Jinhoo</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={incressValue}>incress value {counter}</button>
      <br /> <br />
      <button onClick={decressValue}>decress value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App;

// Full Explaination Watch Readme.md file