import React from 'react';
import { BrowserRouter as Router, Route, Switch, Outlet } from 'react-router-dom';
import PopularMovies from './component/api/PolpularMovies';
import './App.css';
import Profile from './profil/profil.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet>
          <Router>
            <Switch>
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </Outlet>
        <h1>Netflim</h1>
      </header>
      <main>
        <PopularMovies />
      </main>
    </div>
  );
}

export default App;