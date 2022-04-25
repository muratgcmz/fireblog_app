import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";



const Dashboard = () => {
 
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/details");
  }

  return (
    <div>
      <h1 className="dash-text">──── Dashboard ────</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          
          justifyContent: "center",
        }}
      >
        <BlogCard  onClick={handleClick} />
        <BlogCard  />
      </div>
    </div>
  );
};

export default Dashboard;