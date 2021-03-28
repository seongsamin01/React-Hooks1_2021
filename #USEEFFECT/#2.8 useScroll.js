// scroll 올리고 내림에 따라 text 색 변화주기.
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

    const useScroll = () => {
      const [state, setState] = useState({
        x: 0,
        y: 0
      });
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    }
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
      return state;
    };

      const APP = () => {
        const { y } = useScroll();
        return (
          <div className="App" style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "purple" }}>하이월드</h1>
          </div>
        );  
      };

const rootElement = document.getElementById("root");
ReactDOM.render(<APP />, rootElement);
