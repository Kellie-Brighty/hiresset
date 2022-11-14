import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { HiRectangleGroup } from "react-icons/hi2";
import { MdCrueltyFree } from "react-icons/md";
import { GrRadialSelected } from "react-icons/gr";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router";
import AuthHeader from "../../components/auth/AuthHeader";

const useStyles = makeStyles((theme) => ({
  container: {},
  inner_flex: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50px",
    },
  },
  content_box: {
    border: `0.5px solid #ccc`,
    height: 400,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 20,
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 10,
      padding: "20px 10px",
      height: 500,
      justifyContent: "space-evenly",
    },
  },
  content_title: {
    fontFamily: "Marcellus",
    fontSize: 45,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  option_boxes: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  box: {
    border: `0.5px solid #ccc`,
    padding: 30,
    borderRadius: 5,
    margin: "0px 10px",
    cursor: "pointer",
    transition: ".2s",
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0px",
    },
  },
  selected_box: {
    border: `3px solid ${theme.palette.primary.main}`,
    padding: 30,
    borderRadius: 5,
    margin: "0px 10px",
    cursor: "pointer",
    background: "#e3682b1f",
    transition: ".2s",
  },
  box_header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box_textcontainer: {},
  box_icons: {
    fontSize: 22,
  },
  box_icons_one: {
    fontSize: 30,
  },
  box_icons_selected: {
    fontSize: 22,
    color: theme.palette.primary.main,
  },
  box_text: {
    width: 200,
    marginTop: 20,
    fontSize: 22,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  btn_container: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    outline: "none",
    width: 300,
  },
  btn_unselected: {
    padding: "10px 20px",
    border: "none",
    background: "#ffece1",
    color: theme.palette.secondary.main,
    fontSize: 16,
    borderRadius: 4,
    cursor: "not-allowed",
    outline: "none",
    width: 300,
  },
  already_container: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
    },
  },
  login_link: {
    color: "blue",
    cursor: "pointer",
  },
}));

const AuthChoice = () => {
  const classes = useStyles();
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <AuthHeader />
      <div className={classes.inner_flex}>
        <div className={classes.content_box}>
          <p className={classes.content_title}>
            Join as a client or freelancer
          </p>
          <div className={classes.option_boxes}>
            <div
              className={id === "Client" ? classes.selected_box : classes.box}
              onClick={() => {
                setId("Client");
              }}
            >
              <div className={classes.box_header}>
                <HiRectangleGroup className={classes.box_icons_one} />
                {id === "Client" ? (
                  <GrRadialSelected className={classes.box_icons_selected} />
                ) : (
                  <BsCircle className={classes.box_icons} />
                )}
              </div>
              <div className={classes.box_textcontainer}>
                <p className={classes.box_text}>
                  I’m a client, hiring for a project
                </p>
              </div>
            </div>

            <div
              className={
                id === "Freelancer" ? classes.selected_box : classes.box
              }
              onClick={() => setId("Freelancer")}
            >
              <div className={classes.box_header}>
                <MdCrueltyFree className={classes.box_icons_one} />
                {id === "Freelancer" ? (
                  <GrRadialSelected className={classes.box_icons_selected} />
                ) : (
                  <BsCircle className={classes.box_icons} />
                )}
              </div>
              <div className={classes.box_textcontainer}>
                <p className={classes.box_text}>
                  I’m a freelancer, looking for work
                </p>
              </div>
            </div>
          </div>

          <div className={classes.btn_container}>
            {id === "Client" ? (
              <button
                className={classes.btn}
                onClick={() => navigate("/client_signup")}
              >
                Join as a Client
              </button>
            ) : id === "Freelancer" ? (
              <button
                className={classes.btn}
                onClick={() => navigate("/talent_signup")}
              >
                Apply as a Freelancer
              </button>
            ) : (
              <button className={classes.btn_unselected}>Create Account</button>
            )}
          </div>

          <div className={classes.already_container}>
            <p>
              Already have an account?{" "}
              <span
                className={classes.login_link}
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthChoice;
