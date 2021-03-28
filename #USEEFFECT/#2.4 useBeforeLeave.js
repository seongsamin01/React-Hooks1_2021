// useBeforeleave, onBefore, mouseleave등을 사용해서 user가 browser에서 커서를 옮겨 나가려고 할때, 붙잡기 console 출력
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

    const useBeforeLeave = onBefore => {
      if (typeof onBefore !== "function") {
        return;
      }
      const handle = event => {
        const { clientY } = event;
        if(clientY <= 0 ) {
            onBefore();
        }
      };
            useEffect (() => {
              document.addEventListener("mouseleave", handle);
              return () => document.removeEventListener("mouseleave", handle);
            }, []);
        };


    const App = () => {
        const beforeleave = () => console.log("오늘만 최대 50%까지 할인!! 기회를 놓치지마세요!");
        useBeforeLeave(beforeleave);
        return (
          <div className="App">
            <h1>올리브영핫세일</h1>
          </div>
        );
    };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
