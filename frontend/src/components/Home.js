import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Home = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    return loggedIn ? (
        <div>
            <h1>
                Dashboard
            </h1>
        </div>
    ) : (<Redirect to='/signin' />)


}

export default Home
