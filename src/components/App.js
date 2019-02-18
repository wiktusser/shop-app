import React, { Component } from 'react';
import '../App.css';

import { NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Installed core dependencies
          </p>
          <NavLink to={'/detail'}>
            go to detail page
          </NavLink>
        </header>
      </div>
    );
  }
}

export default App;
