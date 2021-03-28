// useEffect는 componentDidmount, componentDidupdate, componenetDidUnmount  의 역할을 한다.
// 브라우저상에 버튼을 누르면 카운트가 올라가고, console창엔 해당 명령어가 촐력되더라.

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

    const App = () => {
      const sayHello = () => console.log("hello");
      const [number, setNumber] = useState(0);
      const [aNumber, setAnumber] = useState(0);
      useEffect(sayHello, [number]); // <- hello가 콘솔에 뜸
    //useEffect(sayHello, []); <-hello가 콘솔에 안뜸
      return (
        <div className="App">
          <h1>안녕하십니꽈</h1>
          <button onClick={() => setNumber(number + 1)}>{number}</button>
          <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
      );
    };

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
