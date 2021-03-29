// 텍스트 opacity, duration ease-in-out, delay 를 사용해서 text가 시간차간격을 두고 나타나게 하는 것을 배웠다.
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

    const useFadeIn = (duration = 1, delay = 0) => {
      if(typeof duration !== "number" || typeof delay !== "number") {
        return;
      }
      const element = useRef();
      useEffect(() => {
        if (element. current) {
          const { current } = element;
          current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
          current.style.opacity = 1;
        }

      }, []);
      return { ref: element, style: { opacity: 0 } };
    };
  
    const APP = () => {
      const fadeInH1 = useFadeIn(1, 2);
      const fadeInP = useFadeIn(1, 3);
      return (
        <div className="App">
          <h1 {...fadeInH1}>수깡수깡안녕하수깡</h1>
          <p {...fadeInP}>나 민정이는 지금 너무 행복하고, 앞으로도 행복할겁니다.</p>
        </div>
        );
     };

const rootElement = document.getElementById("root");
ReactDOM.render(<APP />, rootElement);
