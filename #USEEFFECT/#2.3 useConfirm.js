// browser에 confirm 창 띄우기, confirm시 -> 해당값 출력, unconfirm시 -> 해당값 출력
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

    const useConfirm = (message="", onConfirm, onCancel) => {
      if (!onConfirm || typeof onConfirm !== "function") {
        return;
      }
      if (onCancel && typeof onCancel !== "function") {
        return;
      }
       const confirmAction = () => {
        if (confirm(message)) {
          onConfirm();
        } else {
          onCancel();
        }
      };
      return confirmAction;
    };
    
    const App = () => {
      const makepositive = () => console.log("긍정의 씨앗이 심어졌습니다. 긍정의 열매를 맺을 수 있도록 부지런히 노력하세요.");
      const justdoit = () => console.log("해봤어? 해보기는 하고 말하는거야?")
      const positiberesult= useConfirm("오늘부터하자",  makepositive, justdoit);
      return (
        <div className="App">
          <button onClick={positiberesult}>긍적의 씨앗을 뿌려라</button>
        </div>
      );
    };

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
