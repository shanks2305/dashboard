import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signInUser } from '../redux/action'
import { connect } from 'react-redux'
import LoadingScreen from './LoadingScreen'
import PropTypes from 'prop-types';

const Signin = ({ loggedIn, signIn, signingIn }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e, f) => {
        setUserData({
            ...userData,
            [f]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(userData)
        setUserData({
            email: '',
            password: ''
        })
    }

    return loggedIn ? (
        <Redirect to="/" />
    ) : signingIn ? (
        <LoadingScreen />
    ) : (
                <div className="container p-5 h-100">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1 className="text-center text-info mt-5 display-3">Dashboard Login</h1 >
                            <form className="mt-5" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>E-Mail</label>
                                    <input className="form-control" type="email" required value={userData.email} onChange={(e) => handleChange(e, 'email')} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" required value={userData.password} onChange={(e) => handleChange(e, 'password')} />
                                </div>

                                <button className="btn btn-outline-info w-25 mr-3">Login</button>
                                <Link to="/forgot-password">Forgot Password</Link>
                                <br />
                                <span className="mt-3">Does not have an account? <Link to="/signup">Create account</Link></span>
                            </form>
                        </div >
                    </div >
                </div >
            )
}

const mapDispatchToProps = (dispatch) => ({
    signIn: (user) => dispatch(signInUser(user))
})

const mapStateToProps = (state) => ({
    loggedIn: state.userStatus,
    signingIn: state.signingIn
})

Signin.propTypes = {
    loggedIn: PropTypes.bool,
    signingIn: PropTypes.bool,
    signIn: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
