# What is new in **Project**

## create new Components (InputBox.jsx)
```javascript

import React, { useId } from "react";

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    const amountInputId = useId() // htmlFor="{binding}"


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

```

##  Custom Hooks (useCurrencyInfo.js)
``` javascript

import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // empty object lgane se crash nhin hoga atleast run hoga!
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

```

## Import into App.jsx file 
``` javascript 

import { useState } from 'react'
import { InputBox } from './components'
import './index.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

export default function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const bgPic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTok40C_9Jm2_LFe_rWJ01syvbf535KSl_BlA&s';

  return (

    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${bgPic})` }}
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10 opacity-70'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className='w-full mb-1 bg-black text-black'>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/90 rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div
                className='w-full mt-1 mb-4 bg-black text-black'>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={from}
                  amountDisable
                />
              </div>
              <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg'
              >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

```