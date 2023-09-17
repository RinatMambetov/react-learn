import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const bodyInputRef = useRef();
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    // console.log("title", title);
    // console.log("bodyInputRef", bodyInputRef.current.value);

    // const newPost = { id: Date.now(), title, body };
    // console.log("newPost", newPost);

    setPosts([...posts, { ...post, id: Date.now() }]);
    // setTitle("");
    // setBody("");
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        {/* управляемый компонент */}
        <MyInput
          value={post.title}
          // onChange={(e) => setTitle(e.target.value)}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="post name"
        />
        {/* <input ref={bodyInputRef} type="text" /> */}
        {/* неуправляемый компонент */}
        <MyInput
          value={post.body}
          // onChange={(e) => setBody(e.target.value)}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          // ref={bodyInputRef}
          type="text"
          placeholder="post description"
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of JS posts" />
    </div>
  );
}

export default App;
