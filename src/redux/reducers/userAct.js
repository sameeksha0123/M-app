import * as actionTypes from "../constants/actionTypes";
import { hIT9, hIT6 } from "../../component/Map/RoomallocationData";

const initalState = {};
const userAct = (state = initalState, action) => {
  // console.log('register reducer', state, action)
  // return state;
  //   current_location = () => {
  //     var t = new Date();
  //     var hh = t.getHours();
  //     var mm = t.getMinutes();
  //     var dd = "AM";
  //     var h = hh;
  //     var m = mm;
  //     if (h >= 12) {
  //       h = hh - 12;
  //       dd = "PM";
  //     }
  //     if (m < 15 && m > 0) {
  //       m = 15;
  //     }
  //     if (m < 30 && m >= 15) {
  //       m = 30;
  //     }
  //     if (m < 45 && m >= 30) {
  //       m = 45;
  //     }
  //     if (m < 60 && m >= 45) {
  //       h = h + 1;
  //     }
  //     console.log("@@@@@@", h + ":" + m + " " + dd);
  //     var currentTime = h + ":" + m + " " + dd;
  //   };
  switch (action.type) {
    case actionTypes.LOCATION:
      switch (action.payload) {
        case "Hinjewadi-NPTL SEZ IT 6":
          return {
            map: "Map_H_IT_6 ",
            location: action.payload,
            mapArray: hIT6
          };
          break;
        case "Hinjewadi-NPTL SEZ IT 9":
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
