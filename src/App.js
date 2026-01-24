import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import Homepage from "./Homepage";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      setCurrentPage("homepage");
    } else {
      setCurrentPage("login");
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage("homepage");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("login");
    localStorage.removeItem("user");
  };

  // Simple routing based on URL or state
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/register") {
      setCurrentPage("register");
    } else if (path === "/") {
      if (isLoggedIn) {
        setCurrentPage("homepage");
      } else {
        setCurrentPage("login");
      }
    }
  }, [isLoggedIn]);

  return (
    <div>
      {currentPage === "login" && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
      {currentPage === "register" && <Register />}
      {currentPage === "homepage" && (
        <Homepage onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
