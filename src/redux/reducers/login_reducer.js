import * as actionTypes from '../constants/actionTypes'


const initalState = {
    loginUser:{}
}

const login=(state=initalState,action)=>{
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loginUser :action.payload
            }
        
        default: return state
    }
}
export default login;
