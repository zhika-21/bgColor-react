import React, { Component } from "react";

class Hex extends Component {
  getRandom(colors) {
    return Math.floor(Math.random() * colors.length);
  }
  onClickHandler() {
    const colors = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    const color = document.querySelector(".color");

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += colors[this.getRandom(colors)];
    }
    color.textContent = hexColor;
    document.querySelector("main").style.backgroundColor = hexColor;
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

export default Hex;