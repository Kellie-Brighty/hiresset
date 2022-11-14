import React from "react";
import { makeStyles } from "@material-ui/core";
import { BsArrowRightShort } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1200,
    margin: "auto",
    padding: "100px 0px",
  },
  inner_flex: {
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/customer-communications-home-office-girl-having-phone-conversation-with-client-sitting-laptop_722501-2.jpg?w=740')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    height: 700,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
      backgroundPosition: "center top",
      backgroundSize: "cover",
      height: 450,
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#00000077",
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
  },
  content_box: {
    marginLeft: 40,
    marginBottom: 40,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      padding: "0px 20px",
      justifyContent: "space-evenly",
      marginBottom: 0,
    },
  },
  client_title: {
    color: theme.palette.primary.white,
    fontSize: 72,
    fontFamily: "Marcellus",
    lineHeight: 0.9,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  client_subtitle: {
    color: theme.palette.primary.white,
    width: 350,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      maxWidth: 220,
    },
  },
  action_boxes: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: 40,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
  },
  box: {
    background: theme.palette.primary.main,
    padding: 15,
    borderRadius: 5,
    transition: ".5s",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.primary.white,
      transition: ".5s",
      "& p": {
        color: theme.palette.primary.main,
        transition: ".5s",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
      width: 200,
      "& p": {
        transition: ".5s",
        fontSize: 12,
      },
    },
  },
  box_title: {
    color: theme.palette.primary.white,
    width: 300,
    fontSize: 28,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200,
    },
  },
  subtitle_container: {
    display: "flex",
    alignItems: "center",
  },
  box_subtitle: {
    marginTop: 20,
    fontSize: 18,
    color: theme.palette.primary.white,
    fontWeight: "bold",
  },
}));

const ClientSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.inner_flex}>
        <div className={classes.overlay}>
          <div className={classes.content_box}>
            <p className={classes.client_title}>
              As a Client,
              <br /> Find talent your way
            </p>
            <p className={classes.client_subtitle}>
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <div className={classes.action_boxes}>
              <div className={classes.box}>
                <p className={classes.box_title}>Post a job and hire a pro</p>
                <div className={classes.subtitle_container}>
                  <p className={classes.box_subtitle}>Talent Marketplace</p>
                  <p
                    className={classes.box_subtitle}
                    style={{ marginLeft: 10 }}
                  >
                    &#8594;
                  </p>
                </div>
              </div>
              <div className={classes.box}>
                <p className={classes.box_title}>
                  Let us help you find the right talent
                </p>
                <div className={classes.subtitle_container}>
                  <p className={classes.box_subtitle}>Talent Scout</p>
                  <p
                    className={classes.box_subtitle}
                    style={{ marginLeft: 10 }}
                  >
                    &#8594;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
