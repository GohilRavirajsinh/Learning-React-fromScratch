import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // let [variable, function(callback - check how's code condition)] = useState(), // Jitne bhi states hoti hai '(setCounter)' vo el callback function accept karta hai.

  // let counter = 15 // In React ye default sabhi jgah pe update nhin krage

  const incressValue = () => {
    // counter =+ 1
    // setCounter(counter + 1) // ese bhi hota hai
    setCounter(preCounter => preCounter + 1)       // 'callback' ye sahi tarika hai kyunki last me ye 'setCounter()' hai to function hi. iske ander react ka alag se stateVariable hota hai jo value ko UI me update karta hai!
    // without curly {} '{} lgayenge to value return karni pdegi' or parantheses ke bina bhi chalta hai ye!
    // setCounter(preCounter => preCounter + 1) 
    // setCounter(preCounter => preCounter + 1)
    // setCounter(preCounter => preCounter + 1) // Note: Agar yha par setCounter(counter => counter + 1) ye likhenge to ye counter or uper vala dono counter alag hote hai, so variable updatation me dikkat na ho uske liye better hai stateVaraible ka name hi alag se likh den!
    // setCounter(preCounter => preCounter + 1) jinti bar ye call krenge utni bar ye counting incress hogi ye hai stateVariable ka kmal
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