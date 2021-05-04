import React from 'react'
import {useHistory} from 'react-router-dom'
function Login() {
    let hasan = useHistory()
    return (
        <div className='login'>
            <input type="text" placeholder='username'/>
            <input type="text" placeholder = 'password'/>
            <button onClick={() => hasan.push('/profile')}>Login</button>
        </div>
    )
}

export default Login
