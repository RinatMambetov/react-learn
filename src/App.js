import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  // 1
  // let likes = 0;
  // function increment() {
  //   likes++;
  //   console.log("likes", likes);
  // }

  // 2
  // const state = useState(5);

  // 3
  // const [count, setCount] = useState(5);
  // console.log("count", count);
  // console.log("setCount", setCount);

  // 4
  // const [likes, setLikes] = useState(0);

  // function increment() {
  //   setLikes(likes + 1);
  // }

  // function decrement() {
  //   setLikes(likes - 1);
  // }

  const [value, setValue] = useState("Text in Input");

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
