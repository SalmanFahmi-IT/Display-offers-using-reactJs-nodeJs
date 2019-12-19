import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { Header, Nav } from './components';
import Home from './containers/Home';
import Profile from './containers/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <div className="container">
        <div className='main'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
