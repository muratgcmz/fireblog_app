import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import BlokImg from "../assets/blok.png";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewBlog = () => {
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
          <Stack spacing={2} sx={{width:"45vh"}}>
            <Avatar alt="blog" src={BlokImg} sx={{ width: 150, height: 150, marginX:"auto" }} />
            <Typography sx={{ fontSize: 20 }} color="text.secondary">
              ── NEW BLOG ── 
            </Typography>
            <TextField fullWidth id="title" label="Title*" variant="outlined" />
            <TextField  id="imgUrl" label="Image URL*" variant="outlined" />
            <TextField  id="content" label="Content*" variant="outlined" multiline
          minRows={8}/>
          <Button variant="contained">SUBMIT</Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default NewBlog;