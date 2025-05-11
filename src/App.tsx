import React from "react";
import "./App.css";
import { Tables } from "./Tables";
import { UrlContext } from "./UrlContext";
import { Receipt } from "./Receipt";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

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
