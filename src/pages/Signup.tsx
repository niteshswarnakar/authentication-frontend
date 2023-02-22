import React from "react";
import {
  Typography,
  AppBar,
  Grid,
  Toolbar,
  Container,
  CssBaseline,
} from "@mui/material";

import useStyles from "../styles/signup";

const Signup = () => {
  const classes = useStyles();
  return (
    <>
      <main>
        <Container maxWidth="sm">
          <Typography
            className={classes.marginTop}
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom>
            Signup Page
          </Typography>
        </Container>
      </main>
    </>
  );
};

export default Signup;
