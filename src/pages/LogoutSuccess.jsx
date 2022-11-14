import React from "react";
import { makeStyles } from "@material-ui/styles";
import AuthHeader from "../components/auth/AuthHeader";
import Lottie from "lottie-react";
import logoutAnime from "./logout_success.json";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  inner_flex: {
    display: "flex",
    justifyContent: "center",
    padding: "0px 0px 50px",
  },
  content_box: {
    border: `0.5px solid #ccc`,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      border: "none",
    },
  },
  title_container: {},
  title: {
    fontFamily: "Marcellus",
    fontSize: 40,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  animation_container: {
    display: "flex",
    justifyContent: "center",
  },
  animation: {
    width: 350,
  },
  btn_container: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
    padding: "0px 20px",
  },
  btn: {
    padding: "10px 30px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
    margin: "10px 0px",
  },
}));

const LogoutSuccess = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <AuthHeader />
      <div className={classes.inner_flex}>
        <div className={classes.content_box}>
          <div className={classes.title_container}>
            <p className={classes.title}>Logout Successfull</p>
          </div>

          <div className={classes.animation_container}>
            <Lottie animationData={logoutAnime} className={classes.animation} />
          </div>

          <div className={classes.btn_container}>
            <div>
              <button
                className={classes.btn}
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Continue to Login
              </button>

              <button className={classes.btn} onClick={() => navigate("/")}>
                Continue to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutSuccess;
