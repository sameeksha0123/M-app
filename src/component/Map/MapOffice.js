import React, { Component } from "react";
import OfficeBox from "../Office_box/Office_box";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import "./MapOffice_container.css";

class MapOffice extends Component {
  constructor(props) {
    super(props);
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
    const mapArr = this.props.mapArray;
    console.log("====", this.props.mapArray);
    // return <div>heelloS</div>;
    return (
      <>
        <Typography variant="h6" gutterBottom className="">
          {this.props.location}
        </Typography>
        <div className="officeMapping-container">
          {mapArr.map((item, index) => (
            <Link className="officeLink" to={`/bookSlot`}>
              <OfficeBox
                className="box"
                key={item.id}
                name={item.name}
                availabitity={item.available}
                click={e => this.onSelect(e.target)}
              />
            </Link>
          ))}
        </div>
      </>
    );
    //  {/* {roomArray.map((item, index) => ( */}
    //       {/* console.log('--',item,index)
    //         <Link className="officeLink" to={`/Dashboard/bookSlot`}>
    //           <OfficeBox
    //             className="box"
    //             key={item.id}
    //             name={item.name}
    //             availabitity={item.available}
    //             click={e => this.onSelect(e.target)}
    //             //   active={this.state.selected}
    //           />
    //         </Link>
    //       ))} */}
  }
}
const mapStateToProps = state => ({
  mapArray: state.userAct.mapArray,
  location: state.userAct.location
});
export default connect(mapStateToProps)(MapOffice);
