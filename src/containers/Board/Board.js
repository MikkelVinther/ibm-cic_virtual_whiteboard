import React, { Component } from 'react';
import Post from '../../components/Post/Post';

import classes from './Board.module.css';

class Board extends Component {
    State = {
        posts: [{}]
    }

    render() {
        return (
            <div className={classes.Board}>
                <Post msg="Hello! I a new and improved message!" />
            </div>
        );
    }
}

export default Board;