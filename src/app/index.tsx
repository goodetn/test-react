import React, { Component } from "react";
import "./index.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React - learn test</h1>
          <nav className="navbar" role="navigation">
            <ul>
              <li className="nal-li">
                <a href="/#">Batman</a>
              </li>
              <li className="nal-li">
                <a href="/#">Supermman</a>
              </li>
              <li className="nal-li">
                <a href="/#">Aquaman</a>
              </li>
              <li className="nal-li">
                <a href="/#">Wonder Woman</a>
              </li>
            </ul>
          </nav>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
