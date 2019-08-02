import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Home from './containers/Home'

function App() {
    return (
        <div className="App">
            {/* <Route path='/' component={Home} /> */}
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/newRegister' component={Register} />
            </Switch>
        </div>
    );
}

export default App;
