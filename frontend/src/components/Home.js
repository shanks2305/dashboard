import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { singInCompleted, logout } from '../redux/action'
import Header from './Header'
import Nav from './Nav'
import Body from './Body'

const Home = (props) => {

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'))
            props.allreadySignedIn(user)
        }
    })

    const userLogout = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user')
            props.logout()
        }
    }

    return props.loggedIn ? (
        <div>
            <Header />
            <Nav />
            <Body />
        </div>
    ) : (<Redirect to='/signin' />)


}

const mapStateToProps = (state) => ({
    user: state.userData,
    loggedIn: state.userStatus
})

const mapDispatchToProps = (dispatch) => ({
    allreadySignedIn: (user) => dispatch(singInCompleted(user)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
