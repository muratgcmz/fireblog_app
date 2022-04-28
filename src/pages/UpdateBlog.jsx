
import React, { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import BlokImg from "../assets/blok.png";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";

const UpdateBlog = () => {
    const location = useLocation();
    const item = location.state.item;
    const initialValues = {...item}
    const navigate = useNavigate();
    const [info, setInfo] = useState(initialValues)
    const {EditBlog} = useContext(BlogContext);



    const handleSubmit = (e) => {
        e.preventDefault();
        EditBlog(info);
        const item = info
        navigate("/details", {state: {item}});
      }



    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

  return (
    <React.Fragment>
    <CssBaseline />
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "85vh",
          width: '100%',
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
        <Stack spacing={2} sx={{width:"45vh"}}>
          <Avatar alt="blog" src={BlokImg} sx={{ width: 150, height: 150, marginX:"auto" }} />
          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            ── UPDATE BLOG ── 
          </Typography>
          <TextField 
          fullWidth 
          id="title" 
          label="Title*" 
          variant="outlined"
          value={info.title}
          onChange={handleChange}
          name="title"
          />
          <TextField  
          id="imgUrl" 
          label="Image URL*" 
          variant="outlined"
          value={info.image}
          onChange={handleChange}
          name="image"
          />
          <TextField  
          id="content"
          name="content"
          label="Content*" 
          variant="outlined"
          value={info.content}
          multiline
          minRows={8}
          onChange={handleChange}
          />
        <Button variant="contained" type="submit">UPDATE</Button>
        </Stack>
        </form>
      </Box>
    </Container>
  </React.Fragment>
);
};



export default UpdateBlog