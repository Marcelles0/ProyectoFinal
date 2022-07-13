import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AppTranslate from "./pages/AppTranslate/AppTranslate";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./components/AuthContext";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Layout />} >
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/app-translate" element={<AuthProvider><AppTranslate /></AuthProvider>} />
        <Route path="/dashboard" element={<AuthProvider><Dashboard /></AuthProvider>} />
      </Route>
    </Routes>
  );
}

function Layout(props) {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
