import React, { Component } from 'react';
import Board from '../Board/Board';
import Login from '../../components/Login/Login';

import classes from './Auth.module.css';

class Auth extends Component {
    state = {
        users: [
            {usrID: 1, usrName:"Guest", password: "Guest", email: "guest@guest.ok", role: "user"},
        ],
        userInput: {username: "", password: ""},
        activeUsrID: 0,
        showLogin: true
    }

    postInputHandler = ( event ) => {
        const userInput = {...this.state.userInput};
            if (event.target.name === "username") {
                userInput.username = event.target.value;
            }
            else if (event.target.name === "password") {
                userInput.password = event.target.value;
            }

        this.setState({userInput: userInput});
    }

    postSubmitHandler = ( event ) => {
        const users = [...this.state.users];
        const userInput = {...this.state.userInput};
        users.forEach((user, index) => {
            if (userInput.username === user.usrName && userInput.password === user.password){
                this.state.activeUsrID = user.usrID;
                this.setState({showLogin: false});
            }
            else {
                alert("Stop right there!\nThats the wrong username or password, pal");
            }
        });
        event.preventDefault();
    }


    currentUser = () => {
        const users = [...this.state.users];
        let currentUser = {};
        users.forEach((user, index) => {
            if (this.state.activeUsrID === user.usrID){
                currentUser = user;
            }
        });
        return currentUser;
    }

    render() {
        return (
            <div>
                 {this.state.showLogin ? <Login submit={this.postSubmitHandler} change={this.postInputHandler} /> : null}
                <Board currentUser={this.currentUser} />
            </div>
        );
    }
}

export default Auth;