import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>

  )
}

export default AppRouter