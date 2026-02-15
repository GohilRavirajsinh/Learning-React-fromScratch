import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function directCheck() {
  return (
    <div>
      <h2>Let's Check Run or Not</h2>
    </div>
  )
}

const a_Element = (
  <a href='https:///google.com'>Visit Site</a>
)

const anotherUser = ' Goku'

const reactElement = React.createElement( // react element library run like this & it's a object
  'a',                    // Element / Tag
  { href: 'https://google.com', target: '_blank' },     // Attributes {}
  'Click here to visit',  // Title
  anotherUser             // Inject Variable Goku
)

createRoot(document.getElementById('root')).render(

  // directCheck() // its run but we cannot execute like that
  // <App />
  reactElement // it also run

)
