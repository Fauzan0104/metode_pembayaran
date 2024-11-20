import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Langganan from "./components/Langganan";
import MetodePembayaran from "./components/MetodePembayaran";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Langganan />} />
        <Route path="/metode-pembayaran" element={<MetodePembayaran />} />
      </Routes>
    </Router>
  );
}

export default App;
