import React from 'react';
import './App.css';

import Login from './pages/Login/Login';
import Catchup from './pages/Catchup/Catchup';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/catchup">
            <Catchup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </ Router>
    </div>
  );
}

export default App;
