import React from "react";
import { hIT9, hIT6 } from "./RoomallocationData";
import OfficeBox from '../Office_box/Office_box';
import './MapOffice_container.css'


const officeArray=(props)=>{
  const office=props.mapOffice;
  if (office === "Map_H_IT_6") {
     var arr=hIT6.map(item =>item)
    console.log("---",arr)
    console.log('conditional when map',arr)
    
  } else if (office === "Map_H_IT_9") {
    var arr=hIT9.map(item =>item)
    console.log("---",officeArray)
    console.log('conditional when map',arr)
  } else {
     
   console.log('not found')
  
  }}
const map1 = props => {
  console.log("Map location", props.mapOffice);
  // const officeArray= allocate(props.map)
  // const office=props.mapOffice;
   
function selectOffice() {
  console.log("selected")
}
  return (
    <div className="MapOffice_container">
      <h1>{props.location}</h1>
      <h1>{props.mapOffice}</h1>
      {/* {officeArray.map(item =>{
        console.log('---------',item)
      })} */}
      {/* {this.officeArray(props.mapOffice)} */}
      <div className="officeFloor" >
      {hIT6.map((item,index)=>(
        // console.log('--',item,index)
        <OfficeBox className="box" key={index} name={item} click={selectOffice} />
      ))}
      </div>
    </div>
  );
};
export default map1;

// const allocate = props => {
//   console.log(props);
//   const office = props;
//   console.log("office selected", office);
  
  
// };
