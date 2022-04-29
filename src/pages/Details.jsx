import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
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
import { Box, Button, Container, CssBaseline, Stack } from '@mui/material';
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
  
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl">
        <Typography
          sx={{ color: "#046582", fontFamily: "Girassol" }}
          variant="h2"
          component="h2"
        >
          ──── DETAILS ────
        </Typography>
        <Box>
          <Card
            sx={{
              width: "90%",
              height: "40%",
              display: "block",
              margin: "auto",
              marginBottom: 4,
            }}
          >
            <CardMedia
              component="img"
              alt={item.title}
              height="60%"
              image={item.imageURL}
              objectfit="contain"
            />
            <CardContent
              sx={{
                display: "block",
                backgroundColor: "#EFEEFE",
                padding: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Girassol",
                  color: "#046582",
                  fontSize: "2rem",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.date}
              </Typography>
              <Typography sx={{ textAlign: "start" }}>
                {item.content}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ color: "black", textAlign: "start" }}>
                <IconButton sx={{ color: "black" }}>
                  <AccountCircleIcon fontSize="medium" />
                </IconButton>
                {item.author}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: -2 }}>
              <IconButton aria-label="add to favorites"
              onClick={() => {handleLike();}}
              sx={{ color: `${likeColor}`}}>
                <FavoriteIcon />
              </IconButton>
              <span>{likeNumber}</span>
              <IconButton aria-label="comment">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <span>1</span>
            </CardActions>
          </Card>
          {item.author === currentUser?.email ? (
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: 3,
              }}
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => {
                  handleUpdate(item.id);
                }}
              >
                Update
              </Button>
              <Button
                size="large"
                variant="contained"
                color="error"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </Button>
            </Stack>
          ) : null}
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default Details;