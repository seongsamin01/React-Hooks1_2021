// web API Notification 을 사용해서 user가 특정 행위를 했을 때 Notification(알림)을 보여주는 것을 배웠다.
// 이 때 , icon, vibrate, sound, badge, image 등 다양한 방식으로 알림을 줄 수 있다.
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

    const useNotification = (title, options) => {
      if(!("Notification" in window)) {
        return;
      }
      const fireNotif = () => {
        if(Notification.permission !== "granted") {
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              new Notification(title, options);
            } else {
              return;
            }
          });
        } else {
          new Notification(title, options);
        }
      };
      return fireNotif;
    };

    const App = () => {
      const triggerNotif = useNotification("내가 이 시대를 흔드는 성공한 사업가가 되어도 되겠니?", {
        body: "나는 해냈어"
      });
      return (
        <div className="App" style={{ height: "1000vh" }}>
          <button onClick={triggerNotif}>Hello</button>
        </div>
      );
    };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
