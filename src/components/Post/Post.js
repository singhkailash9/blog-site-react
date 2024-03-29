import React from 'react';

// 2024-02-20T12:49:51.689Z
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
function Post(props) {
    return <div className='post'>
        <img src={props.imageURL} alt="Post" />
        <h1>
            {props.title}
        </h1>
        <p>
            {props.description}
        </p>
        <small>
            Posted on {formatDate(props.createdAt)}
        </small>
    </div>
}

export default Post;