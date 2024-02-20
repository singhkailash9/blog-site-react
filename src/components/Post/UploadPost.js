import React, { useState } from 'react';

function UploadPost(props) {

    const [UploadedPost, setUploadedPost] = useState({
        title: "",
        description: "",
        imageURL: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUploadedPost(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    const handleClick = (e) => {
        e.preventDefault();
        const postWithDefaultImage = {
            ...UploadedPost,
            imageURL: UploadedPost.imageURL || "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=50"
        };

        props.postRequest(postWithDefaultImage);
        setUploadedPost({
            title: "",
            description: "",
            imageURL: ""
        });
    }

    return (
        <form onSubmit={handleClick}>
            <input onChange={handleInput} name='title' value={UploadedPost.title}
                type="text" placeholder='Post Something' />
            <textarea onChange={handleInput} name="description" value={UploadedPost.description}
                rows="3" placeholder='Write something related to post'></textarea>
            <input onChange={handleInput} name='imageURL' value={UploadedPost.imageURL}
                type="text" placeholder='Image Link (Optional)' />
            <button type="submit">Post</button>
        </form>
    );
}

export default UploadPost;
