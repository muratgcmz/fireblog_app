import * as React from 'react';
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
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function MediaCard() {
    const { currentUser } = useContext(AuthContext);

    const [likeNumber, setLikeNumber] = useState(0);
    const [likeColor, setLikeColor] = useState();
    const [click, setClick] = useState(true);
  
  
    ///like make red and +1 function
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

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent sx={{backgroundColor:"#EFEEFE"}}>
        <Typography gutterBottom variant="h5" component="div">
          TİTLE HERE
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginBottom:"10px"}}>
          DATE HERE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <AccountCircleIcon fontSize='small'/>
      <Typography variant="body2" color="text.secondary" sx={{m:1}}>
        {currentUser?.email} 
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
    </Card>
  );
}
