import Goku from './Goku.jsx' // here import and we use that imported file access.

function App() {
const whatGokuDo = 'Analays'
  return (
    <>
      <Goku /> {/* it print that file whole code here */}
      <h1>Goku is back for {whatGokuDo}</h1> {/* we can access direct variable using {} */}
      <p> Test fragement element</p> {/* <> </> called fragement element */}
    </>
  )
}

export default App