import React, { Component } from "react";
import { LeftPart } from "./components/leftPart";
import MiddlePart from "./components/MiddlePart";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="content">
          <LeftPart />
          <MiddlePart />

          <div class="right-part">
            <div class="dish-pic" />
            <div class="dish-info" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
