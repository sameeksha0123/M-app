import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActions";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom'
import axios from "axios";
import './BookCard.css'




class BookCard extends Component {
constructor(props){
    super(props);
    this.state={
        reason:'',
        filtered: [],
        list: [
            "Go to the store",
            "Wash the dishes",
            "Learn some code"
          ],
          query: '',
          data: [],
          search:''
    }
    this.handleChange = this.handleChange.bind(this);
}
updateSearch=(e)=>{
  this.setState({search:e.target.value.substr(0,20)})
}
handleInputChange = () => {
    this.setState({
        query: this.search.value
    })
    this.filterArray();
}
getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(responseData => {
        // console.log(responseData)
        this.setState({
            data:responseData.name
        })
        console.log("+++++",this.state.data)
    })
}
filterArray = () => {
    var searchString = this.state.query;
    var responseData = this.state.data
    if(searchString.length > 0){
        // console.log(responseData[i].name);
        responseData = responseData.filter(l => {
            console.log( l.name.toLowerCase().match(searchString));
        })
    }
}
componentWillMount(){
    this.getData();
}
componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
reasonChange =(e)=>{
    this.setState({reason:e.target.value})
    console.log("reason",this.state.reason)
}
handleChange(e) {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];

    // If the search bar isn't empty
if (e.target.value !== "") {
        // Assign the original list to currentList
  currentList = this.props.items;

        // Use .filter() to determine which items should be displayed
        // based on the search terms
  newList = currentList.filter(item => {
            // change current item to lowercase
    const lc = item.toLowerCase();
            // change search term to lowercase
    const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
    return lc.includes(filter);
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.props.items;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
}

    render(){
      let name=["mango","apple","orange"].filter(
        (n)=>{
          return n.indexOf(this.state.search) !== -1;
        }
      )
        return(
            <Card className="book-card">
            <CardActionArea >
              <CardContent>
                  <Table>
                  <TableRow>
                  <TableCell align="left">
                <Typography variant="h6" component="h6" >
                  Booked By 
                </Typography></TableCell>
                <TableCell align="left">XXXXX
                {/* {this.props.bookee} */}
                </TableCell>
                </TableRow>
                <TableRow><TableCell className="table-cell"  align="left">
                <Typography variant="h6" component="h6" >
               
                XXXXX
                </Typography></TableCell>
                </TableRow>
                     <TableRow><TableCell className="table-cell" align="left">
                <Typography variant="h6" component="h6" >
                  Capacity  
                </Typography></TableCell><TableCell className="table-cell" align="left">XX</TableCell>
                </TableRow>
                <TableRow><TableCell className="table-cell" align="left">
                <Typography variant="h6" component="h6" >
                  Reason  
                </Typography></TableCell>
                <TableCell align="left" className="table-cell " style={{padding:' 14px 40px 0 16px'}}>                
                <textarea row='10' col='50' onChange={this.reasonChange}>  </textarea></TableCell>
                </TableRow>
                </Table>
                <hr/>
                <Link className="officeLink" to={`/userinfo`}>
         <Button variant="contained" color="primary" >
         <AddIcon />
       </Button>
       </Link>
       {/* <input type="text" className="input"onChange={this.handleChange}  placeholder="Search..." />
       <ul> {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}</ul> */}

              secondone
              {/* <div className="searchForm">
                <form>
                    <input type="text" id="filter" placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
                </form>
                <div>
                    {
                        this.state.data.map((i) =>
                            <p>{i.name}</p>
                        )
                    }
                </div>
            </div> */}
            <ul> {name.map(item => (
                <li key={item}>{item}</li>
              ))}</ul>
            <input type="text" 
            id="filter" 
            placeholder="Search for..." 
            value={this.state.search} onChange={this.updateSearch.bind(this)}/>
              </CardContent>
            </CardActionArea>
          </Card>
        )
    }
}
const mapStatetoProps=state=>({
    bookee: state.login.loginUser
})
// export default connect(mapStateToProps)(BookCard)
export default BookCard