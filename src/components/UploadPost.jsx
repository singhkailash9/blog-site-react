import React, { useState } from 'react';

function UploadPost(props){

    const [UploadedPost, setUploadedPost] = useState({
        title: "",
        description: "",
        timestamp: "",
        image: ""
    });

    function handleInput(e){
        const {name, value} = e.target;
        const currentTime = new Date().toLocaleString();
        if (name === "title"){
            setUploadedPost(prevValue => ({
                title: value,
                description: prevValue.description,
                timestamp: currentTime,
                image: prevValue.image
            }));
        } else if(name === "description"){
            setUploadedPost(prevValue => ({
                title: prevValue.title,
                description: value,
                timestamp: currentTime,
                image: prevValue.image
            }));
        } else if(name === "image"){
            setUploadedPost(prevValue => ({
                title: prevValue.title,
                description: prevValue.description,
                timestamp: currentTime,
                image: value
            }));
        }
    }

    function handleClick(e){
        e.preventDefault();
        const postWithDefaultImage = {
            ...UploadedPost,
            image: UploadedPost.image || "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=50"
        };

        props.postRequest(postWithDefaultImage);
        setUploadedPost({
            title: "",
            description: "",
            timestamp: "",
            image: ""
        });
    }

    return (
        <form onSubmit={handleClick}>
            <input onChange={handleInput} name='title' value={UploadedPost.title} type="text" placeholder='Post Something' />
            <textarea onChange={handleInput} name="description" value={UploadedPost.description} rows="3" placeholder='Write something related to post'></textarea>
            <input onChange={handleInput} name='image' value={UploadedPost.image} type="text" placeholder='Image Link (Optional)' />
            <button type="submit">Post</button>
        </form>
    );
}

export default UploadPost;
