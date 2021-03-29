// browser에서 user가 변경사항 저장 없이 창을 나가려고 할때, 변경사항 ㅇ저장없이 정말 나갈거냐고 되물어주는거,
// const 뒤는 임의단어선택가능, event.window,addEventListener,""쌍따 안, 등은 임의로 단어를 바꿀 수 없다는걸 알게됐다.
// 이번 강의는 재밌었고, 유익했다!!!
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

    const usePreventLeave = () => {
        const user = event => {
          event.preventDefault();
          event.returnValue = "";
        };
        const enableProtect = () => window.addEventListener("beforeunload", user);
        const disableProtect = () => window.removeEventListener("beforeunload", user);
        return { enableProtect, disableProtect };
    };
    const App = () => {
        const { enableProtect, disableProtect } = usePreventLeave();
        return (
          <div className="App">
            <button onClick={enableProtect}>Protect</button>
            <button onClick={disableProtect}>UnProtect</button>
          </div>
        );
    };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
