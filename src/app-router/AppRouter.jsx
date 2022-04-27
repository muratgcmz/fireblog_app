import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Details from "../pages/Details";
import PrivateRouter from "./PrivateRouter";



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRouter />}>
                    <Route path="/details" element={<Details />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/newblog" element={<NewBlog />} />
            </Route>
        </Routes>
    </BrowserRouter>

  )
}

export default AppRouter