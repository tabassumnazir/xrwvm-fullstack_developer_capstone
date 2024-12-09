import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";

function App() {
  return (
    <Routes>
      {/* Route for login */}
      <Route path="/login" element={<LoginPanel />} />

      {/* Route for register */}
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
    </Routes>
  );
}

export default App;
