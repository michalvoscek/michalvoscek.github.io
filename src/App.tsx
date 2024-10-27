import React from "react";
import "./App.css";
import { Tables } from "./Tables";
import { UrlContext } from "./UrlContext";
import { Receipt } from "./Receipt";

function App() {
  return (
    <div className="App">
      <UrlContext key={window.location.search}>
        <Tables />
        <Receipt />
      </UrlContext>
    </div>
  );
}

export default App;
