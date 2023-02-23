import React, { useEffect, useState } from "react";
import { Typography, AppBar, Toolbar, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "../styles/styles";
const Header = () => {
  const [isLogged, setIsLogged] = useState<boolean>();

  useEffect(() => {
    setIsLogged(Boolean(localStorage.getItem("email")));
  }, []);

  console.log({ isLogged });

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.navContainer}>
          <Link className={classes.linkDecoration} to="/">
            <Typography color="white" variant="h6">
              Home
            </Typography>
          </Link>

          <Link to="/signup" className={classes.linkDecoration}>
            {" "}
            <Typography color="white" variant="h6">
              Sign Up
            </Typography>
          </Link>
          <Link
            onClick={() => {
              setIsLogged(false);
              localStorage.clear();
            }}
            to="/login"
            className={classes.linkDecoration}>
            {isLogged ? (
              <Typography color="white" variant="h6">
                Logout
              </Typography>
            ) : (
              <Typography color="white" variant="h6">
                Login
              </Typography>
            )}
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
