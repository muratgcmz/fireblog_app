import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom';
import ClaruswayIcon from "../assets/cw.jpeg";
import {useNavigate} from "react-router-dom";



const  Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  

  const handleMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  const header = "<Clarusway/>"

  

  return (
    <Box sx={{ flexGrow: 1 , color:"#046582"}} >
         
     
      <AppBar position="static" sx={{backgroundColor:"#046582"}}>
        <Toolbar >
          <IconButton
            
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
          
          <img src={ClaruswayIcon} height="50px"></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          ──── <strong>{header}</strong> BLOG ──── 
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {navigate("/login");setAnchorElUser(null)}}>Login </MenuItem>
                <MenuItem onClick={() => {navigate("/register");setAnchorElUser(null)}}>Register  </MenuItem>
                
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar ;