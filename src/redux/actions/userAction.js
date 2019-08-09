import * as actionTypes from "../constants/actionTypes";

export const location_action = useraction => {
  return {
    type: actionTypes.LOCATION,
    payload: useraction
  };

};
export const startTime_action = useraction => {
  return {
    type: actionTypes.STARTTIME,
    payload: useraction
  };

};
export const endTime_action = useraction => {
  return {
    type: actionTypes.ENDTIME,
    payload: useraction
  };

};
export const meetingType_action = useraction => {
  return {
    type: actionTypes.MEETINGTYPE,
    payload: useraction
  };

};