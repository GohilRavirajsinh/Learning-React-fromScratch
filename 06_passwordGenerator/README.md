# What is new in **Project**

## useCallback() Hook: For Optimised Code and store values into cache memory!, this example uses only
```javascript

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

```

## useEffect() Hook: Re Rendering When Dependencies are change! this example uses
``` javascript 

useEffect(() => {
    passwordGenerater()
  }, [length, numberAllowed, charAllowed, passwordGenerater]) // koi bhi dependencies chhedega to vo ReRun ho jayega

```

## useRef() Hook: kisibhi chij ka reference lena hai tab ye hook ka use hota hai
``` javascript

const passwordRef = useRef(null) // for UI Effect Optimasion
const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()               // select all clipboard
    passwordRef.current?.setSelectionRange(0,8) // select 8 range of pass
    window.navigator.clipboard.writeText(password)
  }, [password]) // password Optimised

// return UI Changes
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

```