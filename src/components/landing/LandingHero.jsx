import React from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "auto",
    padding: "80px 0px",
    paddingTop: 100,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  inner_flex: {
    display: "flex",
    padding: "0px 50px",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: "0px 20px",
    },
  },
  right_side: {
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  right_side_maintext: {
    fontFamily: "Marcellus",
    fontSize: 80,
    lineHeight: 0.9,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      marginTop: 20,
    },
  },
  right_side_subtext: {
    color: theme.palette.secondary.main,
    fontSize: 22,
    marginTop: 30,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      marginTop: 10,
    },
  },
  left_side: {
    [theme.breakpoints.down("xs")]: {
      order: -1,
    },
  },
  image: {
    width: 600,
    [theme.breakpoints.down("xs")]: {
      width: 280,
    },
  },
  btn_container: {
    marginTop: 40,
  },
  btn: {
    padding: "10px 30px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      marginTop: -40,
    },
  },
}));

const LandingHero = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.inner_flex}>
        <div className={classes.right_side}>
          <p className={classes.right_side_maintext}>How work should work</p>
          <p className={classes.right_side_subtext}>
            Forget the old rules. You can have the best people. Right now. Right
            here.
          </p>
          <div className={classes.btn_container}>
            <button
              className={classes.btn}
              onClick={() => navigate("/register-as")}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className={classes.left_side}>
          <img src="hero-image.png" alt="" className={classes.image} />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
