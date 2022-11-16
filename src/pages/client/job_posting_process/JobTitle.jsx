import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainHeader from "../../../components/main/MainHeader";
import { useNavigate } from "react-router";
import { IoChevronBackOutline } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "auto",
    marginTop: 50,
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
    },
  },
  inner_flex: {
    display: "flex",
    justifyContent: "center",
  },
  content_box: {
    border: `0.5px solid #ccc`,
    padding: 30,
    borderRadius: 20,
    margin: "30px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      border: `none`,
      marginTop: 5,
      borderRadius: 10,
      marginBottom: 50,
    },
  },
  content_flex: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  left: {
    width: 450,
    [theme.breakpoints.down("xs")]: {
      width: 350,
      display: "flex",
      flexDirection: "column",
    },
  },
  title_stage: {},
  title_label: {
    fontSize: 40,
    fontFamily: "Marcellus",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  title_explain: {
    fontSize: 16,
    marginTop: 20,
  },
  divider: {
    width: 0.5,
    height: 600,
    background: "#ccc",
    margin: "0px 50px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  right: {
    [theme.breakpoints.down("xs")]: {
      margin: "20px 0px",
      width: 350,
    },
    width: 450,
  },
  right_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    outline: "none",
    marginTop: 10,
    width: 300,
    padding: "10px 20px",
    borderRadius: 5,
    border: "2px solid #ccc",
  },
  example_container: {
    marginTop: 20,
  },
  examples: {
    marginTop: 20,
  },
  example_title: {
    fontWeight: "bold",
  },
  example_list_container: {
    width: 400,
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      width: 320,
    },
  },
  examples: {
    margin: "10px 0px",
  },
  action_section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  btn_and_cancel: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  cancel: {
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    width: 200,
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
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
    // width: "100%",
    width: 200,
    [theme.breakpoints.down("xs")]: {
      width: "50%",
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
    justifyContent: "space-evenly",
  },
  btn_outlined: {
    padding: "10px 20px",
    border: `1px solid ${theme.palette.primary.main}`,
    background: "transparent",
    color: theme.palette.primary.main,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    // width: "100%",
    width: 200,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  option_dots: {
    border: `0.5px solid ${theme.palette.primary.main}`,
    borderRadius: 50,
    fontSize: 25,
    cursor: "pointer",
  },
  job_description_container: {
    margin: "40px 0px",
  },
  describe_body_text: {
    fontSize: 14,
    color: theme.palette.secondary.main,
    margin: "10px 0px",
  },
  describe_input: {
    outline: "none",
    marginTop: 10,
    width: 300,
    padding: "10px 20px",
    borderRadius: 5,
    border: "2px solid #ccc",
  },
}));

const JobTitle = () => {
  const classes = useStyles();
  const savedTitle = localStorage.getItem("job_title");
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (title === "") {
      setTitle(null);
    }

    if (description === "") {
      setDescription(null);
    }
  }, [title, description]);

  useEffect(() => {
    savedTitle && setTitle(savedTitle);
  }, []);

  return (
    <div>
      <MainHeader />
      <div className={classes.container}>
        <div className={classes.inner_flex}>
          <div className={classes.content_box}>
            <div className={classes.content_flex}>
              <div className={classes.left}>
                <p className={classes.title_stage}>1/4 Title</p>
                <p className={classes.title_label}>
                  Let's start with a strong title and interesting description.
                </p>
                <p className={classes.title_explain}>
                  This helps your job post stand out to the right candidates.
                  It’s the first thing they’ll see, so make it count!
                </p>
              </div>

              <div className={classes.divider} />

              <div className={classes.right}>
                <p className={classes.right_title}>
                  Write a title for your job post
                </p>
                <input
                  type="text"
                  className={classes.input}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <div className={classes.example_container}>
                  <p className={classes.example_title}>Example titles</p>
                  <ul className={classes.example_list_container}>
                    <li className={classes.examples}>
                      Build responsive WordPress site with booking/payment
                      functionality
                    </li>
                    <li className={classes.examples}>
                      Graphic designer needed to design ad creative for multiple
                      campaigns
                    </li>
                    <li className={classes.examples}>
                      Facebook ad specialist needed for product launch
                    </li>
                  </ul>
                </div>

                <div className={classes.job_description_container}>
                  <p className={classes.right_title}>Describe your job</p>
                  <p className={classes.describe_body_text}>
                    This is how talent figures out what you need and why you’re
                    great to work with!
                  </p>

                  <textarea
                    type="text"
                    className={classes.describe_input}
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Already have a job description? paste it here..."
                  />
                </div>
              </div>
            </div>

            <div className={classes.btn_container}>
              <div />
              <div className={classes.btn_and_cancel}>
                <button
                  className={classes.btn_outlined}
                  onClick={() => {
                    setTitle("");
                    navigate("/getting_started");
                  }}
                >
                  Back
                </button>
                {title === null ? (
                  <button
                    className={classes.btn_unselected}
                    style={{ marginRight: 10 }}
                  >
                    Next: Skills
                  </button>
                ) : description === null ? (
                  <button
                    className={classes.btn_unselected}
                    style={{ marginRight: 10 }}
                  >
                    Next: Skills
                  </button>
                ) : (
                  <button
                    className={classes.btn}
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      navigate("/skills");
                      localStorage.setItem("job_title", title);
                      localStorage.setItem("job_description", description);
                    }}
                  >
                    Next: Skills
                  </button>
                )}
              </div>
            </div>

            <footer className={classes.footer}>
              <IoChevronBackOutline
                onClick={() => {
                  setTitle("");
                  navigate("/getting_started");
                }}
                className={classes.option_dots}
              />
              {title === null ? (
                <button
                  className={classes.btn_unselected}
                  style={{ marginRight: 10 }}
                >
                  Next: Skills
                </button>
              ) : description === null ? (
                <button
                  className={classes.btn_unselected}
                  style={{ marginRight: 10 }}
                >
                  Next: Skills
                </button>
              ) : (
                <button
                  className={classes.btn}
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    navigate("/skills");
                    localStorage.setItem("job_title", title);
                    localStorage.setItem("job_description", description);
                  }}
                >
                  Next: Skills
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
