
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard  from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewBlog from "./pages/NewBlog";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/newblog" element={<NewBlog />}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
