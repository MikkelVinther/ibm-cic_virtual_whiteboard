import React, { Component } from 'react';

import classes from './Login.module.css';


class Login extends Component {



  render() {
    return (
     <div className={classes.modal}>
       <div className={classes.modal_content}>
       <form onSubmit={this.props.submit}>
       <p> Welcome to the Whiteboard! Login below: </p>
       <label>Username:</label>
       <input type="text" name="username" onChange={this.props.change}></input>
       <label>Password:</label>
       <input type="password" name="password" onChange={this.props.change} ></input>
       <input type="submit" value="Submit" />
       </form>
      </div>
     </div>
    );
   }
  }

export default Login;