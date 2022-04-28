import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";
import loadingif from "../assets/loading.gif";



const Dashboard = () => {
  const {BlogFetch} = useContext(BlogContext);
  const {blogList, isLoading} = BlogFetch();
 
  
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
        {isLoading ?
          <img src={loadingif} alt="loading_gif"/>
        :<>
          
            {blogList?.map((item, index)=>(
              <BlogCard item={item} key={index} />
             ))}
        </>
        }
       
      </div>
    </div>
  );
};

export default Dashboard;