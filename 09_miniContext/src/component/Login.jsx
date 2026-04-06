import React, { useState, useContext } from 'react'
import UserContext from '../context/UseContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleObject = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            {" "}
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleObject}>submit</button>
        </div>
    )
}

export default Login