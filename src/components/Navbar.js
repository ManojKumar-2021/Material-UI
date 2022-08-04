import { AppBar, Typography ,Button, Toolbar} from '@mui/material'
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import React from 'react'

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Cake.com</Typography>
        <Button color="inherit" startIcon={<LoginIcon />}>
          Login
        </Button>
        <Button color="inherit" endIcon={<LogoutIcon />}>
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar