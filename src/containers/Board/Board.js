import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';

import classes from './Board.module.css';

class Board extends Component {
    state = {
        posts: [
            {postID: 1, usrName:"Mikkel", msg: "Oh wow! So many messages!"},
            {postID: 2, usrName:"Egil", msg: "This is another message"},
            {postID: 3, usrName:"Henrik", msg: "Here is a message as well, you know!"}

        ],
        newPostPopup: false,
        newPost: {postID: 0, usrName: "", msg: ""},
        lastPostID: 3
    }

    deletePost = (postIndex) => {
        const modPosts = [...this.state.posts];
        modPosts.splice(postIndex, 1);
        this.setState({posts: modPosts});
    }

    newPostToggle = () => {
        this.setState({
            newPostPopup: !this.state.newPostPopup
        });
    }

    postInputHandler = ( event ) => {
        const newPost = {...this.state.newPost};
            if (event.target.name === "name") {
                newPost.usrName = event.target.value;
            }
            else if (event.target.name === "message") {
                newPost.msg = event.target.value;
            }
        console.log(newPost);
        this.setState({newPost: newPost});
    }

    postSubmitHandler = ( event ) => {
        let nPost = {...this.state.newPost};
        const posts = [...this.state.posts];
        nPost.postID = this.state.lastPostID;
        nPost.postID++;
        posts.push(nPost);
        this.setState({posts: posts});
        console.log(this.state.newPost);
        console.log(this.state.posts);
        this.setState({lastPostID: nPost.postID});
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.Board}>
                {this.state.posts.map((post, index) => {
                    return ( 
                        <Post 
                        click={() => this.deletePost(index)} 
                        name={post.usrName}
                        msg={post.msg}
                        key={post.postID} />);
                })}
                <div  onClick={this.newPostToggle}>
                    <button>New Post!</button>
                </div>
                    {this.state.newPostPopup ? <NewPost submit={this.postSubmitHandler} change={this.postInputHandler} toggle={this.newPostToggle} /> : null}
                </div>
        );
    }
}

export default Board;