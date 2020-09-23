import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import SearchPage from './components/searchpage/SearchPage';
import RecommendedVideos from './components/recommendedvideos/RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// BEM class naming conversion
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <h1>YouTube Clone</h1> */}
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
