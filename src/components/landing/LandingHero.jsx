import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "auto",
    padding: "80px 0px",
    paddingTop: 180
  },
  inner_flex: {
    display: "flex",
    padding: "0px 50px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  right_side: {
    width: "40%",
  },
  right_side_maintext: {
    fontFamily: "Mirza",
    fontSize: 80,
    lineHeight: 0.9,
  },
  right_side_subtext: {
    color: theme.palette.secondary.main,
    fontSize: 22,
    marginTop: 30,
    fontWeight: "bold",
  },
  image: {
    width: 600,
  },
  btn_container: {
    marginTop: 40
  },
  btn: {
    padding: "10px 30px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
  },
}));

const LandingHero = () => {
  const classes = useStyles();
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
            <button className={classes.btn}>Get Started</button>
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
