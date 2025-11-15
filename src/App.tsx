import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Nav from "@/components/Nav";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* NAV SEMPRE NO TOPO */}
      <Nav />

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}
