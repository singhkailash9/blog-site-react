import React from 'react';
import Post from './Post';

function Posts({ posts }) {
  const reversedPosts = [...posts].reverse();
  return (
    <div className="posts">
      {reversedPosts.map((postItem) => (
        <Post
          key={postItem._id}
          title={postItem.title}
          description={postItem.description}
          timestamp={postItem.timestamp}
          image={postItem.imageURL}
        />
      ))}
    </div>
  );
}

export default Posts;
