import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import './Login.css'

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
        userList.push(user);
        // axios.post(`https://test-urls-generation.firebaseio.com/userList.json`, user)
        //     .then(res => {
        //         console.log("ID-generated", res.data.name)
        //         console.log("response hit", res.config.data)

        //     })
        this.setState({ email: '', password: '', submitted: true })
        console.log("UserList on SUBMIT", userList)
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
export default Login;