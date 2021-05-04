import React from 'react'
import {Redirect} from 'react-router-dom'

function Profile({authorized}) {
    if (! authorized) {
        return <Redirect to = '/login'/>
    }
    return (
        <h2>if you redirected here you must be redirected to here!!</h2>
    )
}

export default Profile
