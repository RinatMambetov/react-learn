import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState("Text in Input");

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      {/* <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JS is a programming language</div>
        </div>
        <div className="post__btns">
          <button>Remove</button>
        </div>
      </div> */}
      {/* <PostItem value={123} item={{ title: 0 }} str={"string"} /> */}
      <PostItem post={{ id: 1, title: "JavaScript", body: "Description" }} />
    </div>
  );
}

export default App;
