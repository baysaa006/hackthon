import React from "react";
// Styles
import "./styles/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Wallets from "./pages/Wallets";
// Fonts
// import "@fontsource/roboto";
// import "@fontsource/roboto-condensed";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Wallets" element={<Wallets />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
