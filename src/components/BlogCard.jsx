import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ item }) {
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate("/details", { state: { item } });
  };

  return (
    <Card sx={{ width: "22rem", height: "39rem" }} onClick={handleClick}>
      <CardMedia
        component="img"
        height="310"
        
        image={item?.imageURL}
        alt="content_img"
        objectfit="contain"
      />
      <CardContent sx={{ backgroundColor: "#EFEEFE" }}>
        <Typography gutterBottom variant="h5" component="div">
        {`${item.title}`.substring(0, 20) + `..`}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "20px" }}
        >
          {item.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`${item.content}`.substring(0, 80) + `...`}
        </Typography>
      </CardContent>
      <CardActions>
        <AccountCircleIcon fontSize="small" />
        <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
          {item?.author}
        </Typography>
      </CardActions>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            handleLike();
          }}
          sx={{ color: `${likeColor}` }}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
          {likeNumber}
        </Typography>

        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
          1
        </Typography>
      </CardActions>
    </Card>
  );
}
