import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BlokImg from "../assets/blok.png";
import { CardContent, CardMedia } from '@mui/material';



export default function Login() {
  

  

  return (
    
    
    <Card sx={{display: 'inline-flex', width:"25%", height:"70vh", marginTop: '5%',}}>
      
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'grid', alignItems:"center", marginLeft:"18%", textAlign: 'center', verticalAlign: 'middle' 
      }}
      noValidate
      autoComplete="on"
    >
     <CardMedia sx={{ marginTop:"10px", borderRadius: '50%', backgroundColor:"#046582"}}
      component="img"
      height="250"
      image={BlokImg}
      alt="Blok_image"
     />
   <h3> ──── REGISTER ──── </h3>  
    <CardContent> 
      
      <div>
        <TextField
          required
          id="outlined-email"
          label="Email"
          size="large"
          
        />
       </div>
       <div>
        <TextField
          required
          id="outlined-password"
          label="Password"
          
        />
       </div>
       <Stack spacing={2} direction="column" >
      
      <Button variant="contained">Register</Button>
      <Button variant="outlined">with </Button>
      
    </Stack>
    </CardContent>
      
    </Box>

    
      
    </Card>
    
  );
}

