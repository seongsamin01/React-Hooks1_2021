//useState써서 코드 요약하기

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>안녕하세요 {item} </h1>
      <h2>useState를 배워보아요 {item} </h2>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
    </div>
  );
}

  class AppUgly extends React.Component{
    state = {
      item: 1
    }
    render(){
      const { item } =this.state;
      return (
        <div className="App">
          <h1>안녕하세요 {item} </h1>
          <h2>useState를 배워보아요 {item} </h2>
          <button onClick={this.incrementItem}>증가</button>
          <button onClick={this.decrementItem}>감소</button>
        </div>
      );
    }
    incrementItem= () => {
      this.setState(state => {
        return {
          item:state.item + 1
        };
      });
    };
    decrementItem= () => {
      this.setState(state => {
        return {
          item:state.item - 1
      };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppUgly />, rootElement);


