import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";
import "./styles.css";

    const App = () => {
      const { loading, data, error, refetch } = useAxios({
         url: "://yts.am/api/v2/list_movies.json"
        });
        console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);
      return (
        <div className="App" style={{ height: "1000vh" }}>
          <h1>{data && data.status}</h1>
          <h2>{loading && "Loading"}</h2>
          <button onClick={refetch}>refetch</button>
        </div>
      );
    };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
