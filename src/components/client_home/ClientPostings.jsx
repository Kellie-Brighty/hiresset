import React from "react";
import { makeStyles } from "@material-ui/core";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "50px auto",
    height: "100%",
  },
  inner_flex: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  content_box: {
    border: `0.5px solid #ccc`,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      border: `0.5px solid #ccc`,
      marginTop: 5,
      borderRadius: 10,
      marginBottom: 50,
    },
  },
  content_header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 900,
    [theme.breakpoints.down("xs")]: {
      width: 320,
    },
  },
  content_title: {
    fontSize: 20,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  see_all_posts: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  footer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    position: "fixed",
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    padding: "20px 0px",
    borderTop: "0.5px solid #ccc",
    background: theme.palette.primary.white,
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  btn_outlined: {
    padding: "10px 20px",
    border: `1px solid ${theme.palette.primary.main}`,
    background: "transparent",
    color: theme.palette.primary.main,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  recent_post: {
    marginTop: 50,
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
    },
  },
  post_header: {
    display: "flex",
    justifyContent: "space-between",
  },
  post_title: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 500,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 210,
      fontSize: 16,
    },
  },
  option_dots: {
    border: `0.5px solid ${theme.palette.primary.main}`,
    borderRadius: 50,
    fontSize: 25,
    cursor: "pointer",
  },
  post_info: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  first_info: {},
  first_info_content: {
    margin: "10px 0px",
  },
  second_info: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
  },
  post_footer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    textAlign: "center",
    padding: "20px 0px",
    borderTop: "0.5px solid #ccc",
    marginTop: 20,
  },
  mobile_see_postings: {
    textDecoration: "underline",
    color: theme.palette.primary.main,
  },
}));

const ClientPostings = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.inner_flex}>
        <div>
          <div className={classes.content_box}>
            <div className={classes.content_header}>
              <p className={classes.content_title}>Your Postings</p>
              <p className={classes.see_all_posts}>See all postings</p>
            </div>

            <div className={classes.recent_post}>
              <div className={classes.post_header}>
                <p className={classes.post_title}>
                  Need an Experienced Wordpress Designer for a simple task.
                </p>
                <BsThreeDots className={classes.option_dots} />
              </div>

              <div className={classes.post_info}>
                <div className={classes.first_info}>
                  <p className={classes.first_info_content}>
                    Fixed-Price - Public
                  </p>
                  <p className={classes.first_info_content}>
                    Created 1 month ago
                  </p>
                </div>
                <div className={classes.second_info}>
                  <div style={{ margin: "0px 10px" }}>
                    <p>8</p>
                    <p>Proposals</p>
                  </div>
                  <div style={{ margin: "0px 10px" }}>
                    <p>2</p>
                    <p>Messages</p>
                  </div>
                  <div>
                    <p>0</p>
                    <p>Hired</p>
                  </div>
                </div>
              </div>

              <div className={classes.post_footer}>
                <p className={classes.mobile_see_postings}>See all postings</p>
              </div>
            </div>
          </div>

          <footer className={classes.footer}>
            <button
              className={classes.btn_outlined}
              style={{ marginRight: 10 }}
            >
              Projects
            </button>
            <button
              className={classes.btn}
              onClick={() => {
                navigate("/getting_started");
              }}
            >
              Post a Job
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClientPostings;
