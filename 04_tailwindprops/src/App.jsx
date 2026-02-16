import { useState } from 'react'
import './App.css'
import './index.css' // into this added tailwindcss file
import Card from './components/Card'


function App() {
  let myObj = {
    username: "Goku",
    age: 23
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailwindProps!</h1>
      <Card testchar="linkin Park" bio=" best english RIP Singer" year="2020"/> 
      {/* <Card testchar="Goku" testObj={myObj} testArr={myArr}/>  */}
      {/* we can add objects and arrays using {} */}
      <Card testchar="Goku" bio=" Goku is a character of DB!"/> {/* it repeat full card automatically in UI or DOM Secound time */}
      <Card testchar="Jinhoo" bio=" Jinhoo Sung is a character of Anime!" year="2026"/> 
      {/* in this case a card file to create a card and using that file reference we can use multiple times! */}
    </>
  )
}

export default App
