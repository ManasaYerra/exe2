import React, { useState } from "react";
import "./App.css";
// import CR from "./CR.js";
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Message from "./Message.js";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      {/* <h1>Counter</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button> */}
      {/* </div> */}
      {/* <CR count = {count}></CR> */}
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      <Message></Message>
    </div>
  );
}

export default App;
