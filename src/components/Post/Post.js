import React from 'react';

import classes from './Post.module.css';

const post = ( props ) => {

    let asgnClass = null;
    let txtClass = null;
    let nameClass = null;
    if (props.hasIMG){
        asgnClass = classes.IMGPost;
        txtClass = classes.IMGText;
        nameClass = classes.IMGName;
    }
    else {
        asgnClass = classes.Post;

    }

    return (
        <div className={asgnClass} >
            <span className={classes.close} onClick={props.click}> x </span>
            {props.hasIMG ? <img className={classes.IMG} alt="Here is maybe a beautiful kitten?" src={props.image} /> : null}
            <p className={txtClass}>{props.msg}</p>
            <p className={nameClass}>- {props.name}</p>  
        </div>
    );
}

export default post;