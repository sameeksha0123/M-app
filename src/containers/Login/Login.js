import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import './Login.css'
import { connect } from 'react-redux'
import { LoginUser } from '../../redux/actions/login_action'
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            userList: [],
        }
    }
    handlechange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitLogin = e => {
        e.preventDefault();
        // this.props();
        const { email, password, userList } = this.state;
        var user = {
            email, password
        }
       console.log("login props",this.props)
        this.props.LoginUser(user)
        // userList.push(user);
        // axios.get(`https://test-urls-generation.firebaseio.com/user.json`, user)
        //     .then(res => {
        //         console.log("ID-generated", res.data.name)
        //         console.log("response hit", res.config.data)

        //     })
        this.setState({ email: '', password: '', submitted: true })
        console.log("UserList on SUBMIT", user)
    }

    render() {
        return (
            <Paper className='paper-container'>
                <div className='login_container'>
                    <div className="login_container--logo">
                        <Typography variant="h3" gutterBottom>
                            LOGIN
      </Typography>
                    </div>
                    <div className="login_container--form">

                        {/* <TextField
                        id="standard-name"
                        label="Name"
                        name='name'
                        className='textField'
                        value={this.state.name}
                        onChange={this.handlechange}
                        margin="normal"
                    /> */}
                        <TextField
                            id="standard-name"
                            label="Email"
                            name='email'
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
                            LOGIN
                    </Button>
                        <Typography variant="overline" display="block" gutterBottom>
                            New to this <Link to='/newRegister' className="link">Register Now</Link>
                        </Typography>
                    </div>
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    login: state.login,

})
const mapDispatchToProps = (dispatch) => {
    return {
        LoginUser: (user) => {
            dispatch(LoginUser(user))
        }
    }
}
export default
    connect(mapStateToProps, mapDispatchToProps)(Login);