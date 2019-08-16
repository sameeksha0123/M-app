import React, { Component } from "react";
// import { hIT9, hIT6 } from "./RoomallocationData";
import OfficeBox from "../Office_box/Office_box";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import BookBlock from "../../component/BookingBlock/BookingBlock";
import "./MapOffice_container.css";
// import { officeSelect_action } from "../../redux/actions/userAction";
// import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.5/node_modules/redux";

function selectOffice() {
  console.log("selected");
}

class Map extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(target, name) {
    this.setState({ selected: !this.state.selected });
    console.log("box selected", target);
    console.log("box selected", target.className);
    var div = target;
    div.classList.add("focused");
    // return <Route path={`/DashBoard/`} component={BookBlock} />;
  }

  render() {
    // console.log("mapArray-map-component", this.props.mapArray);
    const roomArray = this.props.mapArray;
    return (
      <div className="MapOffice_container">
        {/* <h2>{this.props.location}</h2> */}
        <h2>{this.props.mapOffice}</h2>
        {/* {this.officeArray(this.props.mapOffice)} */}
        <div className="officeFloor">
          {/* {this.props.mapOffice && officeArray} */}
          {/* {roomArray.map((item, index) => ( */}
          {/* console.log('--',item,index)
            <Link className="officeLink" to={`/Dashboard/bookSlot`}>
              <OfficeBox
                className="box"
                key={item.id}
                name={item.name}
                availabitity={item.available}
                click={e => this.onSelect(e.target)}
                //   active={this.state.selected}
              />
            </Link>
          ))} */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  mapArray: state.userAct.mapArray
});
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({}, dispatch);
// };
export default connect(mapStateToProps)(Map);
