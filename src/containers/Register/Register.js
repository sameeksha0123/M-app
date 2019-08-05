import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Register.css'
import { registerUser } from '../../redux/actions/register_action'
import Paper from '@material-ui/core/Paper';
import ErrorMsg from '../../component/Error/Error'

const emailCheck = `[a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:gmail|GMAIL)([\.])(?:com|COM)`;
class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {


            name: '',
            email: '',
            password: '',
            userList: [],
            submitted: false,
            errorMsg: {
                name: '',
                email: '',
                password: '',
            }
        }

    }

    handlechange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    //ValidateField
    handleValidation = (event) => {
        // let { name, email, password, userList } = this.state;
        // let errorMsg = {};
        // let formIsValid = true;
        // if (!name) {
        //     formIsValid = false;
        //     errorMsg[name] =
        // }
    }
    submitLogin = e => {
        e.preventDefault();
        // this.props();

        const { name, email, password, submitted, userList } = this.state;
        // const { name, email, password } = this.state.user;

        var testEmail = /^([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:neosofttech|NEOSOFTTECH)([\.])(?:com|COM)/i;
        if (!name) { this.setState({ errorMsg: { name: 'Name requried' } }) }
        if (!email) {
            this.setState({ errorMsg: { email: 'Email required' } })
        }
        else if (!(testEmail.test((email)))) { this.setState({ errorMsg: { email: 'Invalid Email' } }) }
        // let lastAtPos = email.lastIndexOf('@');
        // let lastDotPos = email.lastIndexOf('.');
        // if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {

        //     alert("invalid email")
        // }
        if (!password) { this.setState({ errorMsg: { password: 'Password required' } }) }
        else if ((password).length < 6) { this.setState({ errorMsg: { password: 'Password to short min length 6' } }) }
        var User = {
            name, email, password
            // name: user.name,
            // email: user.email,
            // password: user.password,
        }

        userList.push(User);
        // axios.post(`https://test-urls-generation.firebaseio.com/userList.json`, user)
        //     .then(res => {
        //         console.log("ID-generated", res.data.name)
        //         console.log("response hit", res.config.data)

        //     })
        this.setState({

            name: '',
            password: '',
            email: '',
            submitted: true,
        })
        console.log("UserList on SUBMIT", User)
        this.props.registerUser(User)
    }

    render() {
        const { submitted } = this.state;
        console.log('register redux', this.props)
        // let errorComponent = <ErrorMsg />;
        return (
            <Paper className='paper-container'>
                <div className='register_container'>
                    <div className="register_container--logo">
                        <Typography variant="h3" gutterBottom>
                            REGISTER</Typography>
                    </div>
                    <div className="register_container--form">
                        <div className='textFeild-container'>
                            <TextField
                                id="standard-name"
                                label="Name"
                                name='name'
                                className='textField'
                                value={this.state.name}
                                onChange={this.handlechange}
                                margin="normal"

                            />
                            {submitted && !this.state.name &&
                                <div className="help-block">{this.state.errorMsg.name}</div>
                            }
                        </div>
                        <div className='textFeild-container'>
                            <TextField
                                id="standard-name"
                                label="Email"
                                name='email'
                                type='email'
                                className='textField'
                                value={this.state.email}
                                onChange={this.handlechange}
                                margin="normal"
                            />
                            {submitted && !this.state.email &&
                                <div className="help-block">{this.state.errorMsg.email}</div>
                            }
                        </div>
                        <div className='textFeild-container'>
                            <TextField
                                id="standard-name"
                                label="Password"
                                name='password'
                                className='textField'
                                value={this.state.password}
                                onChange={this.handlechange}
                                margin="normal"
                            />
                            {submitted && !this.state.password &&
                                <div className="help-block">{this.state.errorMsg.password}</div>
                            }
                        </div>
                        <div className="button_container">
                            <Button
                                variant="contained"
                                color="primary"
                                className='login-btn'
                                onClick={this.submitLogin} >
                                REGISTER
                    </Button>
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                className='login-btn'>
                                <Link to='/' className="link"> CANCEL</Link>
                            </Button>
                        </div>
                        <Typography variant="overline" display="block" gutterBottom>
                            Already a user then <Link to='/' className="link">Just Login</Link>
                        </Typography>
                    </div>
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    register: state.register,
    userDetails: state.register.users
})
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => {
            dispatch(registerUser(user))
        }
    }
}
export default
    connect(mapStateToProps, mapDispatchToProps)(Register);