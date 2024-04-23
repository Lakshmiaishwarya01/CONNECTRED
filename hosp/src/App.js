import React from 'react';
import HomePage from './components/HomePage';
import './App.css';
import { RouterPaths } from './components/router'; // Importing RouterPaths

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* Rendering HomePage */}
      <HomePage />
      <Router>
        <div className='overflow-container'>
          {/* Rendering RouterPaths */}
          <RouterPaths />
        </div>
      </Router>
    </div>
  );
}

export default App;
