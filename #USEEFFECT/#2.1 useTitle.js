//브라우저 captitle에 useTitle을 사용해서 componentDidmount와 componentWillupdate 효과를 냈음
//로딩중...-> Home

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

    const useTitle = initialTitle => {
      const [title, setTitle] = useState(initialTitle);
      const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
      };
      useEffect(updateTitle, [title]);
      return setTitle;
    };

    const App = () => {
      const titleUpdater = useTitle("로딩중...");
      setTimeout(() => titleUpdater("Home"), 3000);
      return (
        <div className="App">
          <h1>안녕하십니꽈</h1>
        </div>
      );
    };

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
