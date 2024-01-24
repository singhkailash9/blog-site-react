import React from 'react';

function Post(props){
    return <div className='post'>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.description}
        </p>
        <small>
            Posted on {props.timestamp}
        </small>
    </div>
}

export default Post;