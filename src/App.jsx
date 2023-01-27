import React from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import SkappaKonto from "./components/Skappakonto/SkappaKonto";
import Verifierakonto from "./components/Verifierakonto/VerifieraKonto";
import Settings from "./components/Setting/Settings";
import Invite from "./components/Invite";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Index from "./pages/index";
export default function App() {
  return (
    <div className="App">
      <Index />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/skappakonto" element={<SkappaKonto />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/verifierakonto" element={<Verifierakonto />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </div>
  );
}
