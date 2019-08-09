import * as actionTypes from "../constants/actionTypes";

const initalState = {};
const userAct = (state = initalState, action) => {
  // console.log('register reducer', state, action)
  // return state;
  switch (action.type) {
    case actionTypes.LOCATION:
      switch (action.payload) {
        case "Hinjewadi-NPTL SEZ IT 6":
          return { map: "Map_H_IT_6 ", location: action.payload };
          break;
        case "Hinjewadi-NPTL SEZ IT 9":
          return { map: "Map_H_IT_9 ", location: action.payload };
        default:
          return;
      }

    case actionTypes.STARTTIME:{
        return{ 
          ...state,
          startTime: action.payload
        }
    }
    case actionTypes.ENDTIME:{
      return{ 
        ...state,
        endTime: action.payload
      }

    }
    
    //console.log('created Project', state, "action", action)
    default:
      return state;
  }
};
export default userAct;
