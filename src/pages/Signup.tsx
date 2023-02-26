import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AlertComponent from "../components/AlertComponent";

const Signup = () => {
  //navigation
  const navigate = useNavigate();

  const [isLogged] = useState<boolean>(Boolean(localStorage.getItem("email")));

  const [emailExist, setEmailExist] = useState<boolean>(false);

  //api end-point of backend
  const url: string =
    "https://user-authentication-git-main-niteshswarnakar.vercel.app/api/users/signup";

  // makeStyles of material ui
  const classes = useStyles();

  // user schema for form validation
  const userSchema = yup.object().shape({
    email: yup.string().email("Enter a proper email").required(),
    password: yup
      .string()
      .min(8)
      .max(50)
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password should match"),
  });

  //form validation ko lagi react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  useEffect(() => {
    if (isLogged) navigate("/");
  });

  const submitHandler = async (data) => {
    setEmailExist(false);
    const requestBody = {
      email: data.email,
      password: data.password,
    };

    try {
      await axios.post(url, requestBody);
      navigate("/login", { state: { signedUp: true } });
    } catch (err) {
      setEmailExist(true);
      reset({
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <>
      {emailExist && (
        <AlertComponent
          severity="error"
          message="Email already exists"
          resetHandler={setEmailExist}
        />
      )}
      <CssBaseline />
      <main>
        <Container className={classes.marginTop} maxWidth="sm">
          <Typography variant="h3" align="center" color="textPrimary">
            Signup Page
          </Typography>
        </Container>
        <Grid className={classes.SingupgridContainer} container>
          <Grid className={classes.SingupformDiv} item xs={12} md={6}>
            <form
              className={classes.SingupformContainer}
              onSubmit={handleSubmit(submitHandler)}>
              <TextField
                fullWidth
                required
                id="email"
                label="email address"
                autoFocus
                className={classes.inputField}
                {...register("email")}
              />
              <p className={classes.errorMessage}>
                {errors.email && errors.email?.message}
              </p>
              <span
                className={`${classes.emailNotFoundMessage} ${classes.errorMessage}`}></span>
              <TextField
                fullWidth
                required
                id="password"
                label="password"
                {...register("password")}
                type="password"
                className={classes.inputField}
              />
              <p className={classes.errorMessage}>{errors.password?.message}</p>
              <TextField
                fullWidth
                required
                id="confirmPassword"
                label="confirm password"
                type="password"
                {...register("confirmPassword")}
                className={classes.inputField}
              />
              <p className={classes.errorMessage}>
                {errors.confirmPassword?.message}
              </p>
              <Button variant="contained" type="submit">
                Sign Up
              </Button>
              <Grid item xs>
                <Link to="/login">Already have an accout?, Login</Link>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link
                  color="inherit"
                  to="https://github.com/niteshswarnakar/user-authentication">
                  user authentication
                </Link>
                {new Date().getFullYear()}
              </Typography>
            </form>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Signup;
