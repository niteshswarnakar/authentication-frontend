import { Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AlertComponent from "../components/AlertComponent";
import useStyles from "../styles/styles";

const Dashboard = () => {
  const { state } = useLocation();
  const classes = useStyles();
  const [loggedInAlert, setLoggedInAlert] = useState<boolean>(
    state?.loggedIn ? state?.loggedIn : false
  );
  const [isLogged] = useState(Boolean(localStorage.getItem("email")));
  return (
    <>
      {loggedInAlert && (
        <AlertComponent
          severity="success"
          message="You are successfully logged in."
          resetHandler={setLoggedInAlert}
        />
      )}
      <Box className={classes.DashboardContainer}>
        {isLogged ? (
          <Box className={classes.DashboardDiv}>
            <Typography variant="h2">Welcome to the Dashboard</Typography>
            <Typography variant="h4">
              Hey {localStorage.getItem("email")?.split("@")[0]}, You are
              authenticated
            </Typography>
          </Box>
        ) : (
          <Typography variant="h2">We did not recognize you</Typography>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
