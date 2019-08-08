import { combineReducers } from "redux";
import register from "./register_reducer";
import login from "./login_reducer";
import userAct from "./userAct";

const rootReducer = combineReducers({
  register,
  login,
  userAct
});
export default rootReducer;
