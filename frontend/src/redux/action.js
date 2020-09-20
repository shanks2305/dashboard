import env from 'dotenv'
import axios from 'axios'
import {
    SING_IN_STARTED,
    SING_IN_COMPLETED,
    SING_IN_FAILED,
    SING_UP_STARTED,
    SING_UP_COMPLETED,
    SING_UP_FAILED,
    USER_LOGOUT
} from './actionTpes'

env.config()
const api = 'http://localhost:8000'

export const signInStarted = () => ({
    type: SING_IN_STARTED
})

export const singInCompleted = (user) => ({
    type: SING_IN_COMPLETED,
    payload: user
})

export const signInFailed = (err) => ({
    type: SING_IN_FAILED,
    payload: err
})

export const signInUser = (user) => {
    return (dispatch) => {
        dispatch(signInStarted())
        axios.post(`${api}/api/signin`, {
            headers: {
                'Content-Type': 'application/json',
            },
            user
        }).then(res => {
            console.log(res)
            dispatch(singInCompleted(res.data))
        }).catch(err => {
            dispatch(signInFailed("Failed to login"))
        })
    }
}

export const signUpStarted = () => ({
    type: SING_UP_STARTED
})

export const signUpCompleted = () => ({
    type: SING_UP_COMPLETED
})

export const signUpFailed = (err) => ({
    type: SING_UP_FAILED,
    payload: err
})

export const signUpUser = (user) => {
    return (dispatch) => {
        dispatch(signUpStarted())
        axios.post(`${api}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            user
        }).then(res => {
            console.log(res.status)
            dispatch(signUpCompleted())
        }).catch(err => {
            dispatch(signUpFailed(err))
        })
    }
}

export const logout = () => ({
    type: USER_LOGOUT
})