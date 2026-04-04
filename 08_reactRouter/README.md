# What is new in **Project**

## Link, NavLink, to="/path", className={({ isActive }) => ${isActive} }
``` javascript

<Link to="#"className="">Get started</Link>
<NavLink
    to="/about"
    className={({ isActive }) =>
        `${isActive ? "text-orange-700" : "text-gray-700"}`
    }
>
    About
</NavLink>

```

## {Outlet}: change automatically path which added in path location
``` javascript

import { useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
```

## createBrowserRouter, createRoutesFromElements, RouterProvider
```javascript

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={< Home/>}/>
      <Route path="/about" element={< About/>}/>
      <Route path="/contact" element={< Contact/>}/>
      <Route path="/user/:userid" element={< User/>}/>
      <Route 
      loader={githubInfoLoader}
      path="/github" 
      element={< Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
```

## Github Connect API, Fetch, Async, Await, useLoaderData()

``` javascript
import { useLoaderData } from 'react-router-dom'
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/GohilRavirajsinh')
  return response.json()
}

export default function Github() {
  const data = useLoaderData()
  return (
    <>
      <div className='bg-gray-600 text-white text-3xl p-4 m-4 rounded-lg text-center'>Github followers: {data.followers}
        <div className='bg-gray-600 text-white text-3xl p-4 m-4 rounded-lg text-center'>Github Bio: {data.bio}</div>
        <img className='text-center' src={data.avatar_url} alt="Get Picture" width={300} height={300} />
      </div>
    </>
  )
}
```