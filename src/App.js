import React from "react";
import logo from "./logo.svg";
import "./App.css";
import News from "./News";
import Weather from "./Weather";
import NewsData from "./NewsData";

function App() {
  return (
    <div className="App">
      <header className="header">News Page</header>
      <div className="News">
        <News />
      </div>
      <div className="Weather">
        <Weather />
      </div>
    </div>
  );
}

export default App;
