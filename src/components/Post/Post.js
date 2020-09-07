import React from 'react';

import classes from './Post.module.css';

const post = ( props ) => {

    return (
        <div className={classes.Post} >
            <span className={classes.close} onClick={props.click}>&times;    </span>
            <p>{props.msg}</p>
            <p>- {props.name}</p>  
        </div>
    );
}

export default post;