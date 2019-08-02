import * as actionTypes from '../constants/actionTypes'


const initalState = {
    user: {}
}
const register = (state = initalState, action) => {
    // console.log('register reducer', state, action)
    // return state;
    switch (action.type) {
        case actionTypes.REGISTERED:
            return {
                user: action.payload
            }
        //console.log('created Project', state, "action", action)
        default: return state
    }
}
export default register;