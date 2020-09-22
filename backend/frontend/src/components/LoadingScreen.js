import React from 'react'
import load from '../static/load.gif'

const LoadingScreen = () => {

    return (
        <div className="loading text-center">
            <img src={load} alt="Loading" />
        </div>
    )
}

export default LoadingScreen
