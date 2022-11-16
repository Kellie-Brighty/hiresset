import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainHeader from "../../../components/main/MainHeader";
import { Chip } from "@material-ui/core";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

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
    marginTop: 30,
    marginBottom: 50,
    width: 900,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      border: `none`,
      marginTop: 5,
      borderRadius: 10,
      marginBottom: 100,
    },
  },
  title_header_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title_text: {
    fontFamily: "Marcellus",
    fontSize: 30,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  post_job_btn: {
    padding: "10px 20px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      display: "none",
    },
  },
  job_title_container: {
    marginTop: 80,
    [theme.breakpoints.down("xs")]: {
      marginTop: 50,
    },
  },
  title_label: {
    fontSize: 20,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  job_title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
  },
  divider: {
    height: 0.5,
    width: "100%",
    background: "#ccc",
    margin: "40px 0px",
    [theme.breakpoints.down("xs")]: {
      margin: "20px 0px",
    },
  },
  job_description_container: {},
  job_description: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
  },
  job_skills_container: {},
  required_skills_container: {
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gridGap: 5,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  job_scope_container: {},
  job_budget_container: {
    marginTop: 40,
  },
  btn_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
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
    // width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "60%",
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
    [theme.breakpoints.down("xs")]: {
      width: "60%",
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
}));

const ReviewPost = () => {
  const classes = useStyles();
  const job_title = localStorage.getItem("job_title");
  const job_skills = JSON.parse(localStorage.getItem("selected_skills"));
  const job_scope = localStorage.getItem("job_scope_type");
  const job_months = localStorage.getItem("job_months");
  const job_experience = localStorage.getItem("job_experience_type");
  const job_budget = localStorage.getItem("job_budget_price");
  const job_budget_type = localStorage.getItem("job_budget_type");
  const job_description = localStorage.getItem("job_description");
  const navigate = useNavigate();

  return (
    <div>
      <MainHeader />
      <div className={classes.container}>
        <div className={classes.inner_flex}>
          <div className={classes.content_box}>
            <div className={classes.title_header_flex}>
              <p className={classes.title_text}>
                Now just review and press the final button.
              </p>
              <button className={classes.post_job_btn}>
                Post your job now
              </button>
            </div>

            <div className={classes.job_title_container}>
              <p className={classes.title_label}>Job Title</p>
              <p className={classes.job_title}>{job_title}</p>
            </div>

            <div className={classes.divider} />

            <div className={classes.job_description_container}>
              <p className={classes.title_label}>Job Description</p>
              <p className={classes.job_description}>{job_description}</p>
            </div>

            <div className={classes.divider} />

            <div className={classes.job_skills_container}>
              <p className={classes.title_label}>Required Skills</p>
              <div className={classes.required_skills_container}>
                {job_skills.map((skill) => (
                  <Chip label={skill} color="primary" />
                ))}
              </div>
            </div>

            <div className={classes.job_scope_container}>
              <p className={classes.title_label}>Scope</p>
              <p className={classes.job_description}>
                {job_scope}, {job_months}, {job_experience} level
              </p>
            </div>

            <div className={classes.job_budget_container}>
              <p className={classes.title_label}>Budget</p>
              <p className={classes.job_description}>
                ${job_budget}.00{" "}
                {job_budget_type === "Hourly Rate" ? "/hr" : null}{" "}
              </p>
            </div>

            <div className={classes.btn_container}>
              <button
                className={classes.btn_outlined}
                onClick={() => {
                  navigate("/budget");
                }}
              >
                Back
              </button>
              <button
                className={classes.btn}
                style={{ marginRight: 10 }}
                onClick={() => {}}
              >
                Post your job now
              </button>
            </div>

            <footer className={classes.footer}>
              <IoChevronBackOutline
                onClick={() => {
                  navigate("/scope");
                }}
                className={classes.option_dots}
              />
              <button
                className={classes.btn}
                style={{ marginRight: 10 }}
                onClick={() => {}}
              >
                Post job
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPost;
