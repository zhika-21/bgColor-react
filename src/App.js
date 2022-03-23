import React from "react"
import{BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Simple from "./components/Simple"
import Hex from "./components/Hex"
import ColorFlipper from "./components/ColorFlipper"
import "./App.css"

export default function App(){
return (
  <Router>
    <div className="main">
      <ul className="App">
        <li className="flipper">
          <Link className="link active" to="/ColorFlipper">ColorFlipper</Link>
        </li>
        <div className="colors">
          <li className="simple">
            <Link className="link" to="/Simple">Simple</Link>
          </li>
          <li className="hex">
            <Link className="link" to="/Hex">Hex</Link>
          </li>
        </div>
      </ul>

   
    <Switch>
      <Route path="/ColorFlipper">
        <ColorFlipper/>
      </Route>
      <Route path="/Simple">
        <Simple/>
      </Route>
      <Route path="/Hex">
        <Hex/>
      </Route>
      
    </Switch>
    </div>
  </Router>
)
}