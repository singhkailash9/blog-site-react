import React, { useState } from 'react';

function UploadPost(props){

    const [UploadedPost, setUploadedPost] = useState({
        title: "",
        description: "",
        timestamp: ""
    });

    function handleInput(e){
        const {name, value} = e.target;
        const currentTime = new Date().toLocaleString();
        if (name === "title"){
            setUploadedPost(prevValue => ({
                title: value,
                description: prevValue.description,
                timestamp: currentTime
            }));
        } else if(name === "description"){
            setUploadedPost(prevValue => ({
                title: prevValue.title,
                description: value,
                timestamp: currentTime
            }));
        }
    }

    function handleClick(e){
        e.preventDefault();
        props.postRequest(UploadedPost);
        setUploadedPost({
            title: "",
            description: "",
            timestamp: ""
        });
    }

    return (
        <form onSubmit={handleClick}>
            <input onChange={handleInput} name='title' value={UploadedPost.title} type="text" placeholder='Post Something' />
            <textarea onChange={handleInput} name="description" value={UploadedPost.description} rows="3" placeholder='Write something related to post'></textarea>
            <button type="submit">Post</button>
        </form>
    );
}

export default UploadPost;
