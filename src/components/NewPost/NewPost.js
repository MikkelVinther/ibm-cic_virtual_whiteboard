import React, { Component } from 'react';

import classes from './NewPost.module.css';


class NewPost extends Component {

    handleClick = () => {
        this.props.toggle();
    };



  render() {
    return (
     <div className={classes.modal}>
       <div className={classes.modal_content}>
       <span className={classes.close} onClick={this.handleClick}>&times;    </span>
       <form onSubmit={this.props.submit}>
       <p> Let's make a new post! </p>
       <input name="message" onChange={this.props.change}></input>
       <input name="name" onChange={this.props.change}></input>
       <input type="submit" value="Submit" />
       </form>
      </div>
     </div>
    );
   }
  }

export default NewPost;