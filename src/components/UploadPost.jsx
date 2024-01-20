import React, { useState } from 'react';

function UploadPost(props){

    const [UploadedPost, setUploadedPost] = useState({
        title: "",
        description: ""
    });

    function handleInput(e){
        const {name, value} = e.target;
        // console.log(`${name}: ${value}`);
        if (name==="title"){
            setUploadedPost(prevValue=>{
                return {title: value, description: prevValue.description}
            })
        } else if(name==="description"){
            setUploadedPost(prevValue=>{
                return {title: prevValue.title, description: value}
            })
        }

    }

    function handleClick(e){
        e.preventDefault();
        props.postRequest(UploadedPost)
        setUploadedPost({
            title: "",
            description: ""
        });
    }

    return <form type="submit">
        <input onChange={handleInput} name='title' value={UploadedPost.title} type="text" placeholder='Post Something' />
        <textarea onChange={handleInput} name="description" value={UploadedPost.description} rows="3" placeholder='Write something related to post'></textarea>
        <button onClick={handleClick}>Post</button>
    </form>
}

export default UploadPost;