import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python 1", body: "Description" },
    { id: 2, title: "Python 2", body: "Description" },
    { id: 3, title: "Python 3", body: "Description" },
  ]);

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      {/* <PostItem post={{ id: 1, title: "JavaScript", body: "Description" }} /> */}
      {/* <h1 style={{ textAlign: "center" }}>List of posts</h1>
      {posts.map((post) => (
        // <div>post</div>
        <PostItem post={post} />
      ))} */}
      <PostList posts={posts} title="List of JS posts" />
      <PostList posts={posts2} title="List of Python posts" />
    </div>
  );
}

export default App;
