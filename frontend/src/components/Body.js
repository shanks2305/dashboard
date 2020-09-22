import React from 'react'
import AreaChart from './AreaChart'
import Carddeck from './Carddeck'
import UserTable from './UserTable'
const Body = () => {
    return (
        <div className="container">
            <Carddeck />
            <AreaChart />
            <UserTable />
        </div>
    )
}

export default Body
