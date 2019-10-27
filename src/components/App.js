import React from 'react';
import logo from '../assets/management.svg';
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Manage from './Manage';
import Search from './Search';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-heading">
          Retail Management
        </h1>

        <nav className="App-nav">
          <ul>
            <li>
              <NavLink to="/manage">&#x262F; Manage</NavLink>
            </li>
            <li>
              <NavLink to="/search">&#x26B2; Search</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <Switch>
            <Route exact path="%PUBLIC_URL%">
              <Redirect to="%PUBLIC_URL%/manage" />
            </Route>
            <Route exact path="%PUBLIC_URL%/manage" component={Manage} />
            <Route exact path="%PUBLIC_URL%/search" component={Search} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
