import * as actionTypes from "../constants/actionTypes";

export const LoginUser = user => {
  return {
    type: actionTypes.LOGIN,
    payload: user
  };
};
// export const registerUser = user => {
//     return {
//       type: actionTypes.REGISTERED,
//       payload: user
//     };
//   };
