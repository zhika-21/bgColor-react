import React, {Component} from "react";

class Simple extends Component{
    getRandom(colors){
        return Math.floor(Math.random() *colors.length)
    }
    onClickHandler(){
        const colors = [
            "red",
            "blue",
            "green",
            "white",
            "purple",
            "pink",
            "brown",
            "black",
            "gray",
            "yellow",
            "orange"
          ];
          const random = this.getRandom(colors);
          const color = document.querySelector(".color")
          document.querySelector("main").style.backgroundColor = colors[random];
    color.textContent = colors[random];
        }
        render(){
            return(
                <main>
                    <div id="container">
          <h2>
              Background Color: <span class="color">red</span>

          </h2>
          <button id="btn" onClick={()=>this.onClickHandler()}>Click me!</button>
          </div>
          </main>
          )

    }
}
export default Simple;