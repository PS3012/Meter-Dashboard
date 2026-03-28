import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Config from "./pages/Config";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/visualize" />} />
        <Route path="/visualize" element={<Dashboard />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}