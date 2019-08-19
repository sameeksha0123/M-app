import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActions";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import Search from "../../multipleSearch/multipleSearch";
import Divider from "@material-ui/core/Divider";
// import { withStyles } from 'material-ui/core/styles';
// import classNames f
import axios from "axios";
import "./BookCard.css";

// const classes = useStyles();

class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      data: [],
      search: "",
      reason: ""
    };
  }
  getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(responseData => {
        // console.log(responseData)
        var array = responseData;
        var nameArray = array.map(item => item.name);
        this.setState({
          data: responseData,
          list: nameArray
        });
        console.log("+++++", this.state.data);

        console.log("names", this.state.list);
      });
  };

  componentWillMount() {
    this.getData();
  }

  reasonChange = e => {
    this.setState({ reason: e.target.value });
    console.log("reason", this.state.reason);
  };

  render() {
    const array = this.state.data.map(suggestion => ({
      value: suggestion.name,
      label: suggestion.name
    }));
    // let name=["mango","apple","orange"].filter(
    //   (n)=>{
    //     return n.indexOf(this.state.search) !== -1;
    //   }
    // )
    const x = "XXXXX";
    return (
      <Card className="book-card">
        <CardActionArea>
          <CardContent>
            <Table>
              <TableRow>
                <TableCell className="table-cell" align="left">
                  <Typography variant="h6" component="h6">
                    Booked By
                  </Typography>
                </TableCell>
                <TableCell className="table-cell" align="left">
                  {/* XXXXX */}
                  {this.props.bookee || x}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell" align="left">
                  <Typography variant="h6" component="h6">
                    {this.props.room || x}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell" align="left">
                  <Typography variant="h6" component="h6">
                    Capacity
                  </Typography>
                </TableCell>
                <TableCell className="table-cell" align="left">
                  XX
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell" align="left">
                  <Typography variant="h6" component="h6">
                    Reason
                  </Typography>
                </TableCell>
                <TableCell
                  align="left"
                  className="table-cell "
                  style={{ padding: " 14px 40px 0 16px" }}
                >
                  <textarea row="10" col="50" onChange={this.reasonChange}>
                    {" "}
                  </textarea>
                </TableCell>
              </TableRow>
            </Table>
            <Divider />

            <Search list={array} />
            <div className="more-booking">
              <Link className="officeLink" to={`/userinfo`}>
                <Button
                  className="add-more"
                  variant="contained"
                  color="primary"
                >
                  <AddIcon />
                </Button>
              </Link>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
const mapStateToProps = state => ({
  bookee: state.login.loginUser,
  room: state.userAct.room
});
export default connect(mapStateToProps)(BookCard);
// export default BookCard;

{
  /* <div class="md-form active-cyan active-cyan-2 mb-3">
  <input class="form-control" type="text" placeholder="Search" aria-label="Search">
</div>

<div class="md-form active-purple-2 mb-3">
  <input class="form-control" type="text" placeholder="Search" aria-label="Search">
</div>
.active-purple-2 input[type=text]:focus:not([readonly]) {
border-bottom: 1px solid #ce93d8;
box-shadow: 0 1px 0 0 #ce93d8;
} */
}
