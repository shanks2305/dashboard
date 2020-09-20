import env from 'dotenv'
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
const api = process.env.API

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
        fetch(`${api}/api/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: user
        }).then((res) => {
            dispatch(singInCompleted(res.data))
        }).catch((err) => {
            dispatch(signInFailed(err))
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
        fetch(`${api}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: user
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