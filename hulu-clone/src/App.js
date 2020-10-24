import React, { useState } from 'react';
import './App.css';
import requests from "./api/request";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import VideoResults from './components/VideoResults/VideoResults';

function App() {
  const [selectedOption, setSelectedOption] = useState([requests.fetchTrending]);

  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <VideoResults selectedOption={selectedOption} />
    </div>
  );
}

export default App;
