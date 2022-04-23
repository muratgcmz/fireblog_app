
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BlokImg from "../assets/blok.png";
import { CardContent, CardMedia } from '@mui/material';
import GoogleImg from "../assets/google.png"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {signIn} from "../helpers/firebase";





export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate)
    
  };
  
    
  return (
    <div className="container"
    style={{backgroundImage:`url("https://picsum.photos/800/800")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    marginTop: "-32px"}}
    >
    
    <Card sx={{display: 'flex', width:"26rem", marginLeft:"37.5%", marginTop:"2rem", paddingTop:"10px", position:"relative", top: "40px"}}>
      
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },  alignItems:"center", marginLeft:"19%", textAlign: 'center', verticalAlign: 'middle' 
      }}
      noValidate
      autoComplete="on"
      onSubmit={handleSubmit}
    >
     <CardMedia sx={{ marginTop:"10px", borderRadius: '50%', backgroundColor:"#046582"}}
      component="img"
      height="200"
      image={BlokImg}
      alt="Blok_image"
     />
   <h3> ──── LOGIN ──── </h3>  
    <CardContent> 
      
      <div>
        <TextField
          required
          id="outlined-email"
          label="Email"
          size="large"
          onChange={(e) => setEmail(e.target.value)} 
        />
        
       </div>
       <div>
        <TextField
          required
          id="outlined-password"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)} 
        />
       </div>
       <Stack spacing={2} direction="column" >
      
      <Button variant="contained" type="submit">Login</Button>
      <Button variant="outlined">
        with <br />
      <img src={GoogleImg} alt="google_img" 
      height="20"
      style={{marginLeft:10}}
      />   
      </Button>
      
    </Stack>
    </CardContent>
      
    </Box>

    
      
    </Card>
    </div>
  )
}

