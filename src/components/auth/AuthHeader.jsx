import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1400,
    margin: "auto",
    position: "sticky",
    top: 0,
    background: theme.palette.primary.white,
  },
  logo: {
    width: 150,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  desktop_link_container: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobile_link_container: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktop_link: {
    "& span": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

const AuthHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <header className={classes.header}>
      <img
        src="main-logo.png"
        alt=""
        className={classes.logo}
        onClick={() => navigate("/")}
      />
      <div className={classes.desktop_link_container}>
        {path === "/client_signup" ? (
          <p className={classes.desktop_link}>
            Looking for work?{" "}
            <span onClick={() => navigate("/talent_signup")}>
              Apply as a talent
            </span>
          </p>
        ) : path === "/talent_signup" ? (
          <p className={classes.desktop_link}>
            Here to hire talent?{" "}
            <span onClick={() => navigate("/client_signup")}>
              Join as a client
            </span>
          </p>
        ) : (
          ""
        )}
      </div>

      <div className={classes.mobile_link_container}>
        {path === "/client_signup" ? (
          <p className={classes.desktop_link}>
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        ) : path === "/talent_signup" ? (
          <p className={classes.desktop_link}>
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default AuthHeader;
