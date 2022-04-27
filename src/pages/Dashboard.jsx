import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";



const Dashboard = () => {
 
  const { BlogFetch } = useContext(BlogContext);
  const { isLoading, blogList } = BlogFetch();

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
        {
          blogList?.map((item, index) =>(
            <BlogCard item={item} index={index} />
          ))
        
        }
      </div>
    </div>
  );
};

export default Dashboard;