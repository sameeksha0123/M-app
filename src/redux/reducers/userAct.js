import * as actionTypes from "../constants/actionTypes";
import { hIT9, hIT6 } from "../../component/Map/RoomallocationData";

const initalState = {};
const userAct = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.LOCATION:
      console.log("location reducer");
      switch (action.payload) {
        case "Ahmedabad":
          return {
            map: "Map_H_IT_6 ",
            location: action.payload,
            mapArray: hIT6
          };
          break;
        case "Bangalore":
          return {
            map: "Map_H_IT_9 ",
            location: action.payload,
            mapArray: hIT9
          };
        case "Pune":
          return {
            map: "Map_H_IT_6 ",
            location: action.payload,
            mapArray: hIT6
          };
          break;
        case "Nodia":
          return {
            map: "Map_H_IT_6 ",
            location: action.payload,
            mapArray: hIT6
          };
          break;
        case "Mumbai":
          return {
            map: "Map_H_IT_9 ",
            location: action.payload,
            mapArray: hIT9
          };
        default:
          return;
      }

    case actionTypes.STARTTIME: {
      return {
        ...state,
        startTime: action.payload
      };
    }
    case actionTypes.ENDTIME: {
      return {
        ...state,
        endTime: action.payload
      };
    }
    case actionTypes.MEETINGTYPE: {
      return {
        ...state,
        meetingType: action.payload
      };
    }
    case actionTypes.ROOM: {
      return {
        ...state,
        roomSelected: action.payload
      };
    }
    // case actionTypes.OFFICESELECTED: {
    //   return {
    //     ...state,
    //     meetingRoomSelected: action.payload
    //   };
    // }
    //console.log('created Project', state, "action", action)
    default:
      return state;
  }
};
export default userAct;
