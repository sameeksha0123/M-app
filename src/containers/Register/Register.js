import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Register.css'
import { registerUser } from '../../redux/actions/register_action'

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
            errorMsg: ''
        }

    }

    handlechange = event => {

        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    //ValidateField
    handleValidation = (event) => {
        const { name, email, password, userList } = this.state;
    }
    submitLogin = e => {
        e.preventDefault();
        // this.props();

        const { name, email, password, submitted, userList } = this.state;
        // const { name, email, password } = this.state.user;
        var testEmail = /^([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:neosofttech|NEOSOFTTECH)([\.])(?:com|COM)/i;
        if (!(testEmail.test((email)))) { alert("email not valid") }
        // let lastAtPos = email.lastIndexOf('@');
        // let lastDotPos = email.lastIndexOf('.');
        // if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {

        //     alert("invalid email")
        // }
        if ((password).length < 4) { alert('length to short') }
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
        return (
            <div className='register_container'>
                <div className="register_container--logo">
                    <Typography variant="h3" gutterBottom>
                        REGISTER</Typography>
                </div>
                <div className="register_container--form">

                    <TextField
                        id="standard-name"
                        label="Name"
                        name='name'
                        className='textField'
                        value={this.state.name}
                        onChange={this.handlechange}
                        margin="normal"
                    />
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
                    <TextField
                        id="standard-name"
                        label="Password"
                        name='password'
                        className='textField'
                        value={this.state.password}
                        onChange={this.handlechange}
                        margin="normal"
                    />
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
                    <Typography variant="overline" display="block" gutterBottom>
                        Already a user then <Link to='/' className="link">Just Login</Link>
                    </Typography>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    register: state.register,
    userDetails: state.register.user
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