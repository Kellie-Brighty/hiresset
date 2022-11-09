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
    [theme.breakpoints.down("xs")]: {
        fontSize: 12
    }
  },
}));

const MainHeader = () => {
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
        <button
          className={classes.btn}
          onClick={() => {
            localStorage.clear();
            navigate("/logout_success");
          }}
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
