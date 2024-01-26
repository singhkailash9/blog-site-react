import React, { useState } from 'react';

function UploadPost(props) {

    const [UploadedPost, setUploadedPost] = useState({
        title: "",
        description: "",
        timestamp: "",
        image: ""
    });

    const getCurrentTime = () => new Date().toLocaleString();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUploadedPost(prevValue => ({
            ...prevValue,
            [name]: value,
            timestamp: name === "title" || name === "description" ? getCurrentTime() : prevValue.timestamp
        }));
    }

    const handleClick = (e) => {
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
            <input onChange={handleInput} name='title' value={UploadedPost.title}
                type="text" placeholder='Post Something' />
            <textarea onChange={handleInput} name="description" value={UploadedPost.description}
                rows="3" placeholder='Write something related to post'></textarea>
            <input onChange={handleInput} name='image' value={UploadedPost.image}
                type="text" placeholder='Image Link (Optional)' />
            <button type="submit">Post</button>
        </form>
    );
}

export default UploadPost;