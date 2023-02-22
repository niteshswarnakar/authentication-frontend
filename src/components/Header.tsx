import React from "react";
import { Typography, AppBar, Toolbar, CssBaseline } from "@mui/material";
const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">Signup</Typography>
          <Typography variant="h6">Login</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
