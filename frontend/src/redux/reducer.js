import {
    SING_IN_STARTED,
    SING_IN_COMPLETED,
    SING_IN_FAILED,
    SING_UP_STARTED,
    SING_UP_COMPLETED,
    SING_UP_FAILED,
    USER_LOGOUT
} from './actionTpes'

const initState = {
    userStatus: false,
    creatingUser: false,
    signingIn: false,
    error: ''
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case SING_UP_STARTED:
            return {
                ...state,
                creatingUser: true,
            }
        case SING_UP_COMPLETED:
            return {
                ...state,
                creatingUser: false,
            }
        case SING_UP_FAILED:
            return {
                ...state,
                creatingUser: false,
                error: action.payload
            }
        case SING_IN_STARTED:
            return {
                ...state,
                signingIn: true,
            }
        case SING_IN_COMPLETED:
            return {
                ...state,
                userStatus: true,
                error: '',
                signingIn: false,
                userData: action.payload
            }
        case SING_IN_FAILED:
            return {
                ...state,
                signingIn: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                userStatus: false,
                creatingUser: false,
                signingIn: false,
                error: ''
            }
        default:
            return state
    }
}

export default reducer