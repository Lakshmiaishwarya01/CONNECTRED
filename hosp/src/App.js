import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import RouterPaths from './components/router';

function App() {
  return (
    <div className="app">
      <Router> 
        <RouterPaths />
      </Router>
    </div>
  );
}

export default App;
