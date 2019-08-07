import * as actionTypes from "../constants/actionTypes";

export const registerUser = user => {
  return {
    type: actionTypes.REGISTERED,
    payload: user
  };
};
