import * as actionTypes from '../constants/actionTypes'

export const registerUser = (user) => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.REGISTERED,
            payload: user
        })
    }
}