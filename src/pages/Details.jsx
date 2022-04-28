import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BlogCard from "../components/BlogCard";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { BlogContext } from '../contexts/BlogContext';
import { Button } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';



const Details = () => {
  
  const location = useLocation();
  const item = location.state.item;
  const navigate = useNavigate()
  const [likeNumber, setLikeNumber] = useState(0);
  const [likeColor, setLikeColor] = useState();
  const [click, setClick] = useState(true);
  const {currentUser} = useContext(AuthContext)
  const { DeleteBlog} = useContext(BlogContext);

  const handleLike = () => {
    
    if (click) {
    setLikeNumber(likeNumber + 1);
    setLikeColor("red");
    setClick(!click);
    } else {
    setLikeNumber(likeNumber - 1);
    setLikeColor();
    setClick(!click);
    }
};


const handleDelete = (id) => {
  DeleteBlog(id)
  navigate("/")
}
const handleUpdate = () => {
  navigate("/updateblog", { state: { item } });
}

 
  return (
  
    <div>
      <h1 className="detail-text">──── Details ────</h1>
  
    <Card sx={{width:"80rem", height:"40rem",justifyContent:"center", alignItems:"center",  textAlign:"center", marginTop:"2rem",  margin:"auto"}} >
      <CardMedia
        component="img"
        height="350"
        image={item?.imageURL}
        alt="green iguana"
      />
      <CardContent sx={{backgroundColor:"#EFEEFE", height:"7rem", textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginBottom:"10px"}}>
          {item?.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item?.content}
        </Typography>
      </CardContent>
      <CardActions>
      <AccountCircleIcon fontSize='large'/>
      <Typography variant="body2" color="text.secondary" sx={{m:1, flexDirection:"start",width:"100rem"}}>
      {item?.author}
      </Typography>
     
      </CardActions>
      <CardActions>
      <IconButton aria-label="add to favorites" 
            onClick={() => {handleLike();}}
            sx={{ color: `${likeColor}`}}>
          <FavoriteIcon />
      </IconButton>
      <Typography variant="body2" color="text.secondary" sx={{m:1}}>
        {likeNumber}
      </Typography>
     
      <IconButton aria-label="comment">
        <ChatBubbleOutlineIcon />
      </IconButton>
     < Typography variant="body2" color="text.secondary" sx={{m:1}}>
        1
      </Typography>
      </CardActions>

      {(currentUser?.email) === (item.author) ? 
      <>
      <Button variant="contained" sx={{marginRight:"10px"}} onClick={() =>{handleUpdate(item.id)}}>Update</Button>
      <Button variant="contained" sx={{backgroundColor:"red"}} onClick={() => { handleDelete(item.id) }}>Delete</Button>
      </> 
      : ""
    }
    </Card>
    </div>
  );

    
  
  }

export default Details