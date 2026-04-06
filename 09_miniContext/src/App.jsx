import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

export default function App() {

  return (
    <UserContextProvider>
      <h2>React with Context API</h2>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}
