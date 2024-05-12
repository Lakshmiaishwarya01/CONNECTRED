import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterPaths from "./components/router";
import { AuthProvider } from "./contexts/authContexts/index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Assuming you have a function to check if the user is logged in
    const checkLoginStatus = () => {
      // Perform your authentication check here
      // Set loading to false once the check is complete
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  return (
    <div className="App">
      {!loading && (
        <AuthProvider>
          <Router>
            <RouterPaths />
          </Router>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;

