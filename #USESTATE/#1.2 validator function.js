// validator function으로 글자수 제한하기!
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target : { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
        willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = value => !value.includes("@");
  const name = useInput("회원:", maxLen);
  return (
    <div className="App">
      <h1>안녕하세요</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


