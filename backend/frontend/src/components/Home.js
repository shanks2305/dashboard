import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { singInCompleted, logout } from '../redux/action'
import Header from './Header'
import Nav from './Nav'
import Body from './Body'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types';

const Home = (props) => {

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'))
            props.allreadySignedIn(user)
        }
    }, [])

    const userLogout = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user')
            toast("Logged Out")
            props.logout()
        }
    }

    return props.loggedIn ? (
        <div>
            <Header user={props.user.name} logout={userLogout} />
            <Nav />
            <Body />
        </div>
    ) : (<Redirect to='/signin' />)


}

Home.propTypes = {
    loggedIn: PropTypes.bool,
    user: PropTypes.shape({
        name: PropTypes.string,
        token: PropTypes.string,
        user: PropTypes.string,

    }),
    allreadySignedIn: PropTypes.func,
    logout: PropTypes.func
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
