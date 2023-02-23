import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Container,
  CssBaseline,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import useStyles from "../styles/styles";
import { Box } from "@mui/system";

const Login = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean>(
    Boolean(localStorage.getItem("email"))
  );

  useEffect(() => {
    if (isLogged) navigate("/");
  });

  const url: string = "http://localhost:8000/api/users/signin";
  const classes = useStyles();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const requestBody = {
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log({ requestBody });
    try {
      const { data } = await axios.post(url, requestBody);
      console.log({ data });
      localStorage.setItem("email", data.email);
      localStorage.setItem("token", data.token);
      setIsLogged(true);
      navigate("/");
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <>
      {" "}
      <CssBaseline />
      <main>
        <Container className={classes.marginTop} maxWidth="sm">
          <Typography variant="h3" align="center" color="textPrimary">
            Login
          </Typography>
        </Container>
        <Grid className={classes.gridContainer} container>
          <Grid className={classes.formDiv} item xs={12} md={6}>
            <Box
              className={classes.formContainer}
              component="form"
              onSubmit={submitHandler}>
              <TextField
                fullWidth
                required
                id="email"
                label="email address"
                name="email"
                autoFocus
                className={classes.inputField}
              />
              <TextField
                fullWidth
                required
                id="password"
                label="password"
                name="password"
                autoFocus
                type="password"
                className={classes.inputField}
              />
              <Button variant="contained" type="submit">
                Login
              </Button>
              <Grid item xs>
                <Link to="/signup">Don't have an account?, Sign up</Link>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" to="https://mui.com/">
                  user authentication
                </Link>
                {new Date().getFullYear()}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Login;
