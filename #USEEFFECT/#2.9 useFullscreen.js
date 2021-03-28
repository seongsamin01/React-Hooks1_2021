//전체화면, 전체화면나가기 만드는 방법
//element, triggerFull, exitFull 
import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

    const useFullscreen = (callback) => {
      const element = useRef();
      const triggerFull = () => {
        if (element.current) {
          element.current.requestFullscreen();
          if(callback && typeof callback === "function"){
            callback(true);
          }
        }
      };
      const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function") {
          callback(false);
        }
      };
      return { element, triggerFull, exitFull };
    };

    const APP = () => {
      const onFullS = isFull => {
        console.log(isFull ? "전체화면이요" : "일반화면이요");
      };
      const { element, triggerFull, exitFull } = useFullscreen(onFullS);
      return (
        <div className="App" style={{ height: "1000vh" }}>
          <div ref={element}>
            <img src="https://jmagazine.joins.com/_data/photo/2018/12/3717398825_hzfJC4PZ_1.jpg" />
            <button onClick={exitFull}>Exit fullscreen</button>
          </div>
          <button onClick={triggerFull}>Make fullscreen</button>
        </div>
      );  
    };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<APP />, rootElement);