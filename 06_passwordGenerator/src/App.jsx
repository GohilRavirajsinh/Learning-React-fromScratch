import { useState, useCallback, useEffect, useRef } from 'react';
import './index.css';

function App() {
  // first collect variables that we need to create project
  const [length, setLength] = useState(8) // select length of password to generate auto genrate password
  const [numberAllowed, setNumberAllowed] = useState(false) // select number true or false using checkbox
  const [charAllowed, setCharAllowed] = useState(false) // select char true or false using checkbox
  const [password, setPassword] = useState("") // this is empty password field to store password what we generate!

  // const passwordGenerater = () => {}
  // now koi to esa solution hoga jo agar me ek hi method bar bar run krunga to password generate karke dega, values alag alag ho sakti hai par Generate karke dega esa kuchh hann a new Hook?
  // useCallback() Hook :is a react hook that let's you cache a function definition between re-renders. 
  // useCallback(fn, dependencies) Syntax
  const passwordGenerater = useCallback(() => {
    let pass = "" // for add password that generate using 'str' and values
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // for generated password using this values
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "/-*+=_!@#$%&"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass) // Read

  }, [length, numberAllowed, charAllowed]) // koi bhi dependencies run hogi vo cache me store hogi jise code Optimised hoga
  // this for loop is for Write password now for Read password

  // passwordGenerater() // cannot use direct like this so using useEffect() Hook
  // useEffect() Hook
  useEffect(() => {
    passwordGenerater()
  }, [length, numberAllowed, charAllowed, passwordGenerater]) // koi bhi dependencies chhedega to vo ReRun ho jayega

  // useRef() Hook: kisibhi chij ka reference lena hai tab ye hook ka use hota hai
  const passwordRef = useRef(null) // for UI Effect Optimasion

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()               // select all clipboard
    passwordRef.current?.setSelectionRange(0,8) // select 8 range of pass
    window.navigator.clipboard.writeText(password)
  }, [password]) // password Oprimised


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generatore</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev) // Reverse the previous value of setNumberAllowed, so yha True or False flip hota rahega 
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev) // Reverse the previous value of setNumberAllowed, so yha True or False flip hota rahega 
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App