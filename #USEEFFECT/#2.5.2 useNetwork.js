//browser console network창에서 online, offline 여부를 바꾸면  browser text에 on/off 변경사항이 반영된다.
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
  
const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);

  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
  const APP = () => {
    const handleNetworkChange = (online) => {
      console.log(online?"온라인임당" : "오프라인임당");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
      <div className="App">
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
    );  
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<APP />, rootElement);
