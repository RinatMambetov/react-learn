import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "qJavaScript 1", body: "eDescription" },
    { id: 2, title: "aJavaScript 2", body: "dDescription" },
    { id: 3, title: "zJavaScript 3", body: "cDescription" },
    // { id: 1, title: "JavaScript 1", body: "Description" },
    // { id: 2, title: "JavaScript 2", body: "Description" },
    // { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // console.log("sort", sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }}></hr>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Sort by"}
          options={[
            { value: "title", name: "By name" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
      {/* <div>
        <select>
          <option value="value">By name</option>{" "}
          <option value="value">By description</option>
        </select>
      </div> */}
      {posts.length !== 0 ? (
        <PostList posts={posts} title="List of JS posts" remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
