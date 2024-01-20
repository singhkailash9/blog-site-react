import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import UploadPost from "./UploadPost";
import Post from "./Post";
import PostArray from './PostArray';

function App() {
  const [posts, setPost] = useState(PostArray);
  function handlePost(newPost){
    // console.log(newPost);
    const {title, description} = newPost;
    if(title==="" || description ===""){
      alert("One of the field is empty");
      return
    }
    return setPost(prevArray => {
        alert("Post added")
        return [...prevArray, newPost]
      })
    };
  return (
    <div>
      <Header />
      <UploadPost 
      postRequest={handlePost}/>
      <div className="gap" />
      {posts.map((postItem, index) => {
        return <Post 
        key = {index}
        id = {index}
        title = {postItem.title}
        description = {postItem.description}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
