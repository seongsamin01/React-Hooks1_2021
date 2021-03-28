// useInput으로 input창에 회원: 넣어주기

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("회원: ");
  return (
    <div className="App">
      <h1>안녕하세요</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



