import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  marginTop: {
    margin: "50px 0 0 0",
  },
  inputField: {
    marginBottom: "16px",
  },
  navContainer: {
    display: "flex",
    gap: "12px",
  },
  linkDecoration: {
    textDecoration: "none",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    alignItems: "center",
    width: "100%",
  },
  formDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "40vh",
    margin: "0 auto",
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useStyles;
