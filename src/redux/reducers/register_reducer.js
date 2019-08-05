import * as actionTypes from '../constants/actionTypes'


const initalState = {
    users: [],
}
const register = (state = initalState, action) => {
    // console.log('register reducer', state, action)
    // return state;
    switch (action.type) {
        case actionTypes.REGISTERED:

            // let user = action.payload;
            // let userObj = users.push(user)
            return {
                ...state,
                users: action.payload
            }
        //console.log('created Project', state, "action", action)
        default: return state
    }
}
export default register;