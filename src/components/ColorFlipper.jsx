import React, { Component } from "react";

class ColorFlipper extends Component {
  getRandom(colors) {
    return Math.floor(Math.random() * colors.length);
  }
  onClickHandler() {
    const colors = [
 "#CD5C5C",
 "#DFFF00",
 "#40E0D0",
 "#6495ED",
 "#CCCCFF",
 "green",
 "black",
 "purple",
 "orange",
 "white"
    ];
    const random = this.getRandom(colors);
    const color = document.querySelector(".color");
     document.querySelector("main").style.backgroundColor = colors[random];
    color.textContent = colors[random];
  }
  render() {
    return (
      <main>
        <div id="container">
          <h2>
            Background Color: <span class="color">#2FE4CB</span>
          </h2>
          <button id="btn" onClick={() => this.onClickHandler()}>
            Click me!
          </button>
        </div>
      </main>
    );
  }
}

export default ColorFlipper;