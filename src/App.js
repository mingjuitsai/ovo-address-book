import React from 'react';
import logo from './assets/management.svg';

function App() {
  return (
    <div className="App">
      <main class="App-main">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 class="App-heading">
            Retail Management
          </h1>

          <nav class="App-nav">
            <ul>
              <li>
                Manage
              </li>
              <li>
                Search
              </li>
            </ul>
          </nav>
        </header>
      </main>
    </div>
  );
}

export default App;
