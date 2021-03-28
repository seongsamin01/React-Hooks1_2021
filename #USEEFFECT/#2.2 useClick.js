//useClick 사용해서 글자누르면 console에 명령어 호출되게 만들기.
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


    const useClick = (onClick) => {
      if (typeof onClick !== "function") {
        return;
      }
      const element = useRef();
      useEffect(() => {
        if (element.current) {
          element.current.addEventListener("click", onClick);
        }
        return () => {
          if (element.current) {
            element.current.removeEventListener("click", onClick);
          }
        };
      }, []);
        return element;
    };

    const App = () => {
      const saysooggwa = () => console.log("수꽈수꽈안녕하수꽈");
      const title = useClick(saysooggwa);
      return (
        <div className="App">
          <h1 ref={title}>안녕하수꽈</h1>
        </div>
      );
    };

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
