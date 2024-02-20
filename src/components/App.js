import React, { useEffect, useState } from "react";
import Header from "./Header Footer/Header";
import Footer from "./Header Footer/Footer";
import UploadPost from "./Post/UploadPost";
import Posts from "./Post/Posts";
// import PostArray from './Post/PostArray';
import Latest from "./PostRight/Latest";
import Trending from "./PostRight/Trending";

function App() {
  const [posts, setPost] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);

  useEffect(()=>{
    // fetch('/posts')
    fetch('/posts')
    .then(res => res.json())
    .then(data=>{
      setPost(data)
    });
  }, [])

  function handlePost(newPost) {
    const { title, description } = newPost;
    if (title === "" || description === "") {
      alert("One of the fields is empty");
      return;
    }
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
    .then(res => res.json())
    .then(data => {
      alert("Post added");
      setShowUploadForm(false);
      setPost(prevArray => [...prevArray, data]);
    })
    .catch((error)=>{
      alert("Could not add Post!");
      console.error('Error:', error);
    });
    // setPost(prevArray => {
    //   alert("Post added");
    //   setShowUploadForm(false);
    //   return [...prevArray, newPost];
    // });
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="post">
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="add-post-button">
            {showUploadForm ? "Cancel" : "Add Post"}
          </button>

          {showUploadForm && <UploadPost postRequest={handlePost} />}
          <div className="gap" />
          <Posts posts={posts} />
        </div>
        <div className="latest-trending">
          <Latest />
          <Trending />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
