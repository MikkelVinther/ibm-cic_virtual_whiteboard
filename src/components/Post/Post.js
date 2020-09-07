import React from 'react';

import classes from './Post.module.css';

const post = ( props ) => {

    return (
        <div className={classes.Post}>
            {props.msg} 
        </div>
    );
}

export default post;