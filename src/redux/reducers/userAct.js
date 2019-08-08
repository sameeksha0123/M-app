import * as actionTypes from "../constants/actionTypes";

const initalState = {};
const userAct = (state = initalState, action) => {
  // console.log('register reducer', state, action)
  // return state;
  switch (action.type) {
    case actionTypes.LOCATION:
      // let user = action.payload;
      // let userObj = users.push(user)
      return {
        ...state,
        location: action.payload
      };
    //console.log('created Project', state, "action", action)
    default:
      return state;
  }
};
export default userAct;
