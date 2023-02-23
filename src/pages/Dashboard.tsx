import { Typography, Box } from "@mui/material";
import React, { useState } from "react";

const Dashboard = () => {
  const [isLogged, setIsLogged] = useState(
    Boolean(localStorage.getItem("email"))
  );
  return (
    <>
      <Box>
        {isLogged ? (
          <Typography variant="h2">
            Hey {localStorage.getItem("email")?.split("@")[0]} !, You are
            athenticated
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Dashboard;
