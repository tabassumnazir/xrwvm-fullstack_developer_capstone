import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      {/* Route for login */}
      <Route path="/login" element={<LoginPanel />} />

      {/* Route for register */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
