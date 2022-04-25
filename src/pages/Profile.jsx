import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function Profile() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <Card sx={{ minWidth: 275, display:"flex",  alignItems: "center", justifyContent: "center", width:"30rem", height:"30rem", flexGrow:1, textAlign :"center", margin:"auto", marginTop:"5rem" }}>
      <CardContent sx={{textAlign:"center"}}>
      <CardMedia
        component="img"
        height="200"
        image={currentUser?.photoURL}
        alt="profile-img"
      />
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Display Name
        </Typography>
        <Typography variant="h5" component="div">
         {currentUser?.displayName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email
        </Typography>
        <Typography variant="body2">
          {currentUser?.email}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
