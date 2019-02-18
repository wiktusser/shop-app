import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'

import SearchInput from './SearchInput'

class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <header className="App-header">
          <NavLink to={'/detail'}>
            go to detail page
          </NavLink>
          <SearchInput />
        </header>
        
      </div>
    );
  }
}

export default AppHeader;
