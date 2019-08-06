import * as actionTypes from '../constants/actionTypes'

export const LoginUser = (user) => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.LOGIN,
            payload: user
        })
    }
}