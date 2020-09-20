import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Signin from '../components/Signin'
import Signup from '../components/Signup'


const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
