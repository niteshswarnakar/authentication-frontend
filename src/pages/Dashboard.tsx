import { Typography, Box } from "@mui/material";
import React, { useState } from "react";
import useStyles from "../styles/styles";

const Dashboard = () => {
  const classes = useStyles();
  const [isLogged] = useState(Boolean(localStorage.getItem("email")));
  return (
    <>
      <Box className={classes.DashboardContainer}>
        {isLogged ? (
          <Typography variant="h2">
            Hey {localStorage.getItem("email")?.split("@")[0]} !, You are
            athenticated
          </Typography>
        ) : (
          <Typography variant="h2">We did not recognize you</Typography>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
