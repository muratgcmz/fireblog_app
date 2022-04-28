import React from 'react'
import { useLocation } from 'react-router-dom';
import BlogCard from "../components/BlogCard";



const Details = () => {
  
  const location = useLocation();
  const item = location.state.item;
  
 
  return (
  
    <div style={{
      display : 'flex',
      justifyContent : 'center',
      marginTop :"100px"}}>
     
        <BlogCard item={item}/>
      
    </div>
    
  )
}

export default Details