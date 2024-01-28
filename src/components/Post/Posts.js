import React from 'react';
import Post from './Post';

function Posts({ posts }) {
  const reversedPosts = [...posts].reverse();
  return (
    <div className="posts">
      {reversedPosts.map((postItem, index) => (
        <Post
          key={index}
          id={index}
          title={postItem.title}
          description={postItem.description}
          timestamp={postItem.timestamp}
          image={postItem.image}
        />
      ))}
    </div>
  );
}

export default Posts;
