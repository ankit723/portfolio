import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/home";
import Starter from "./Components/starter";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
