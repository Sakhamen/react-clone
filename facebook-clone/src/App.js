import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Widgets from './components/Widgets/Widgets';
import Sidebar from './components/Sidebar/Sidebar';
import { useStateValue } from './store/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
