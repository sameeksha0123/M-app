import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "./Login.css";
import { connect } from "react-redux";
import checked from "../../assets/images/Checked.png";
import { registerUser } from "../../redux/actions/register_action";
import { LoginUser } from "../../redux/actions/login_action";
import axios from "axios";
import { REGISTERED } from "../../redux/constants/actionTypes";
import ModalMessage from "../../component/Modal/Modal_message";
import { bindActionCreators } from "redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false,
      errorMsg: {
        name: "",
        // email: '',
        password: ""
      },
      logged: false,
      show: false
      // userList: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://test-urls-generation.firebaseio.com/user.json")
      .then(res => {
        console.log("userList", res);

        console.log("user data", res.data);
        let responseData = res.data;
        let tempArray = [];
        // responseData.map(user => user)
        // console.log("response data", responseData);
        Object.keys(responseData).map(ele => {
          tempArray.push(responseData[ele]);
        });
        // console.log(tempArray);
        // this.props.registerUser(responseData)
        // let user = this.props.register.push(responseData);
        this.props.registerUser(tempArray);
      });
  }
  handlechange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleValidation = () => {
    let { nameErr, passwordErr } = this.state.errorMsg;
    let { name, password } = this.state;
    // let nameError = this.state.errorMsg.name;
    let nameError = "";
    let passwordError = "";
    console.log("validation function called");
    if (!password) {
      passwordError = "Password required";
      this.setState({ errorMsg: { passwordErr: passwordError } });
      //   console.log(this.state);
    } else if (password.length < 6) {
      passwordError = "Password to short min length 6";
      this.setState({ errorMsg: { passwordErr: passwordError } });
      //   console.log(this.state);
    }
    // var testEmail = /^([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:neosofttech|NEOSOFTTECH|gmail|GMAIL)([\.])(?:com|COM)/i;
    if (!name) {
      nameError = "name cannot be blank";
      this.setState({ errorMsg: { nameErr: nameError } });
      //   console.log(this.state);
    }
    if (nameError || passwordError) {
      return false;
    }
    return true;
  };
  submitLogin = e => {
    e.preventDefault();
    // this.props();
    const isValid = this.handleValidation();
    // console.log("isValid", isValid);
    const { name, password, userList } = this.state;
    var User = {
      name,
      password
    };
    // console.log("login props", this.props);
    let registeredUser = this.props.register.users;
    // console.log("userss", registeredUser);
    this.props.LoginUser(User);

    // userList.push(user);
    // axios.get(`https://test-urls-generation.firebaseio.com/user.json`, user)
    //     .then(res => {
    //         console.log("ID-generated", res.data.name)
    //         console.log("response hit", res.config.data)

    //     })
    this.setState({
      name: "",
      password: "",
      // email: '',
      submitted: true,
      errorMsg: {
        name: "",
        // email: '',
        password: ""
      }
    });

    if (isValid) {
      // this.props.LoginUser(User)
      var log = registeredUser.find(
        user => user.name === User.name && user.password === User.password
      );
      console.log("log", log);
      localStorage.setItem("name", log.name);
      localStorage.setItem("password", log.password);
      if (log) {
        this.setState({ logged: true, show: true });
      }
      // registered.find(User => User.name === logged.)
      console.log("UserList on SUBMIT", User);
    }
  };

  render() {
    const { logged, show } = this.state;
    // console.log("UserDetails ", this.props.users);
    return (
      <Paper className="paper-container">
        <div className="login_container">
          <div className="login_container--logo">
            <Typography variant="h3" gutterBottom>
              LOGIN
            </Typography>
          </div>
          <div className="login_container--form">
            <TextField
              id="standard-name"
              label="Name"
              name="name"
              className="textField"
              value={this.state.name}
              onChange={this.handlechange}
              margin="normal"
            />
            {/* <TextField
                            id="standard-name"
                            label="Email"
                            name='email'
                            className='textField'
                            value={this.state.email}
                            onChange={this.handlechange}
                            margin="normal"
                        /> */}
            <TextField
              id="standard-name"
              label="Password"
              name="password"
              className="textField"
              value={this.state.password}
              onChange={this.handlechange}
              margin="normal"
            />
            <div className="button_container">
              <Button
                variant="contained"
                color="primary"
                className="login-btn"
                onClick={this.submitLogin}
              >
                LOGIN
              </Button>
            </div>
            <Typography variant="overline" display="block" gutterBottom>
              New to this{" "}
              <Link to="/newRegister" className="link">
                Register Now
              </Link>
            </Typography>
            {logged && show && (
              <ModalMessage
                show={show}
                image={checked}
                clicked={() => {
                  this.setState({ show: false });
                  this.props.history.push("/userinfo");
                }}
              >
                {" "}
                LOGGED{" "}
              </ModalMessage>
            )}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  users: state.register.users,
  register: state.register
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      registerUser,
      LoginUser
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

// {labelItem.map(item => (
//     <Tab label={item.name} component={Link} to={`/${item.link}`}/>
//   ))}
