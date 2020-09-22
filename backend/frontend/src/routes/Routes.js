import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Forgotpassword from '../components/Forgotpassword'
import ResetPassword from '../components/ResetPassword'


const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/forgot-password" component={Forgotpassword} />
                <Route exact path="/reset-password/:token" component={ResetPassword} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
