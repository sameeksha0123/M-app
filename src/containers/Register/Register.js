import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Register.css";
import { registerUser } from "../../redux/actions/register_action";
import checked from "../../assets/images/Checked.png";
import Paper from "@material-ui/core/Paper";
import ErrorMsg from "../../component/Error/Error";
import ModalMessage from "../../component/Modal/Modal_message";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      userList: [],
      submitted: false,
      errorMsg: {
        name: "",
        email: "",
        password: ""
      },
      registered: false,
      show: false
    };
  }

  handlechange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  //ValidateField
  handleValidation = () => {
    let { nameErr, emailErr, passwordErr } = this.state.errorMsg;
    let { name, email, password } = this.state;
    // let nameError = this.state.errorMsg.name;
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    console.log("validation function called");
    if (!password) {
      passwordError = "Password required";
      this.setState({ errorMsg: { passwordErr: passwordError } });
      console.log(this.state);
    } else if (password.length < 6) {
      passwordError = "Password to short min length 6";
      this.setState({ errorMsg: { passwordErr: passwordError } });
      console.log(this.state);
    }
    var testEmail = /^([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:neosofttech|NEOSOFTTECH|gmail|GMAIL)([\.])(?:com|COM)/i;
    if (!name) {
      nameError = "name cannot be blank";
      this.setState({ errorMsg: { nameErr: nameError } });
      console.log(this.state);
    }
    if (!email) {
      emailError = "Email required";
      this.setState({ errorMsg: { emailErr: emailError } });
    } else if (!testEmail.test(email)) {
      emailError = "Invalid Email";
      this.setState({ errorMsg: { emailErr: emailError } });
    }

    if (nameError || passwordError || emailError) {
      return false;
    }
    return true;
  };
  submitLogin = e => {
    e.preventDefault();
    // this.props();
    const isValid = this.handleValidation();
    console.log("isValid", isValid);

    const { name, email, password, submitted, userList } = this.state;
    if (isValid) {
      console.log("props", this.props);
      var User = { name, email, password };
      axios
        .post(`https://test-urls-generation.firebaseio.com/user.json`, User)
        .then(res => {
          console.log("ID-generated", res.data.name);
          console.log("response hit", res.config.data);
        });
      this.setState({
        name: "",
        password: "",
        email: "",
        submitted: true,
        errorMsg: {
          name: "",
          email: "",
          password: ""
        },
        registered: true,
        show: true
      });
      console.log("UserList on SUBMIT", User);
      console.log("histroy", this.props.history);
      //appending name to url
      const { id } = this.props.match.params;
      this.props.history.push(`/confirm/:${User.name}`);
      //let user = this.props.register.users;
      // this.props.registerUser(user)
    }
  };

  render() {
    const { submitted, registered, show } = this.state;
    // console.log("register redux", this.props);
    // let errorComponent = <ErrorMsg />;
    return (
      <Paper className="paper-container">
        <div className="register_container">
          <div className="register_container--logo">
            <Typography variant="h3" gutterBottom>
              REGISTER
            </Typography>
          </div>
          <div className="register_container--form">
            <div className="textFeild-container">
              <TextField
                id="standard-name"
                label="Name"
                name="name"
                className="textField"
                value={this.state.name}
                onChange={this.handlechange}
                margin="normal"
              />

              <div className="help-block">{this.state.errorMsg.name}</div>
            </div>
            <div className="textFeild-container">
              <TextField
                id="standard-name"
                label="Email"
                name="email"
                type="email"
                className="textField"
                value={this.state.email}
                onChange={this.handlechange}
                margin="normal"
              />
              {submitted && (
                <div className="help-block">{this.state.errorMsg.email}</div>
              )}
            </div>
            <div className="textFeild-container">
              <TextField
                id="standard-name"
                label="Password"
                name="password"
                className="textField"
                value={this.state.password}
                onChange={this.handlechange}
                margin="normal"
              />
              {submitted && !this.state.password && (
                <div className="help-block">{this.state.errorMsg.password}</div>
              )}
            </div>
            <div className="button_container">
              <Button
                variant="contained"
                color="primary"
                className="login-btn"
                onClick={this.submitLogin}
              >
                REGISTER
              </Button>
              <br />
              <Button variant="contained" color="primary" className="login-btn">
                <Link to="/" className="link">
                  {" "}
                  CANCEL
                </Link>
              </Button>
            </div>
            <Typography variant="overline" display="block" gutterBottom>
              Already a user then{" "}
              <Link to="/" className="link">
                Just Login
              </Link>
            </Typography>
          </div>
          {registered && show && (
            <ModalMessage
              show={show}
              image={checked}
              onClicked={() => this.setState({ show: false })}
            >
              {" "}
              REGISTERED{" "}
            </ModalMessage>
          )}
        </div>
        {/* <ErrorMsg /> */}
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  register: state.register
});
const mapDispatchToProps = dispatch => {
  //   return {
  //     registerUser: user => {
  //       dispatch(registerUser(user));
  //     }
  //   };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
