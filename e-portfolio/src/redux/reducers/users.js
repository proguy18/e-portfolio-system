import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    PORTFOLIO_UPDATE_REQUEST,
    PORTFOLIO_UPDATE_SUCCESS,
    PORTFOLIO_UPDATE_FAILURE
} from '../constants/users'

const user = JSON.parse(localStorage.getItem('user'))
const token = JSON.parse(localStorage.getItem('token'))
const initialState = user
    ? {
        pending: false,
        success: true,
        user,
        token
      }
    : {
        pending: false,
        success: false,
        user: {},
        token: ""
    }

const userAuth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                pending: true,
                success: false,
                user: {},
                token: ''
            }
        case LOGIN_SUCCESS:
            return {
                pending: false,
                success: true,
                user: action.user,
                token: action.token
            }
        case LOGIN_FAILURE:
            return {
                pending: false,
                success: false,
                user: {},
                token: ''
            }
        case SIGNUP_REQUEST:
            return {
                pending: true,
                success: false,
                user: {},
                token: ''
            }
        case SIGNUP_SUCCESS:
            return {
                pending: false,
                success: true,
                user: action.user,
                token: action.token
            }
        case SIGNUP_FAILURE:
            return {
                pending: false,
                success: false,
                user: {},
                token: ''
            }
        case LOGOUT_REQUEST:
            return {
                pending: true,
                success: true,
                user: action.user,
                token: action.token
            }
        case LOGOUT_SUCCESS:
            return {
                pending: false,
                success: false,
                user: {},
                token: ''
            }
        case PORTFOLIO_UPDATE_REQUEST:
            return {
                pending: true,
                success: true,
                user: state.user,
                token: state.token
            }
        case PORTFOLIO_UPDATE_SUCCESS:
            var newUser = state.user
            newUser.portfolio = action.portfolio
            return {
                pending: false,
                success: true,
                user: newUser,
                token: state.token
            }
        case PORTFOLIO_UPDATE_FAILURE:
            return {
                pending: false,
                success: true,
                user: state.user,
                token: state.token
            }
        default:
            return state
    }
}

export default userAuth