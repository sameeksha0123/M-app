import { combineReducers } from 'redux';
import register from './register_reducer'
import login from './login_reducer'

const rootReducer = combineReducers({
    register,login
})
export default rootReducer;