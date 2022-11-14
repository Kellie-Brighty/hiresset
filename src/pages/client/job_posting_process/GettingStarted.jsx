import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainHeader from "../../../components/main/MainHeader";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { GrRadialSelected } from "react-icons/gr";
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
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      border: `0.5px solid #ccc`,
      marginTop: 5,
      borderRadius: 10,
      marginBottom: 100,
    },
  },
  content_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  job_timeframe_container: {
    marginTop: 20,
  },
  timeframe_title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: "10px 0px",
  },
  option_boxes: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: 20,
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
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0px",
    },
  },
  box_header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
    width: 250,
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  box_subtext: {
    margin: "10px 0px",
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
    width: "100%",
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
    width: "100%",
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
    width: "100%",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));

const GettingStarted = () => {
  const classes = useStyles();
  const [time, setTime] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <MainHeader />
      <div className={classes.container}>
        <div className={classes.inner_flex}>
          <div className={classes.content_box}>
            <p className={classes.content_title}>Getting Started</p>

            <div className={classes.job_timeframe_container}>
              <p className={classes.timeframe_title}>
                Choose your job timeframe
              </p>

              <div className={classes.option_boxes}>
                <div
                  className={
                    time === "long" ? classes.selected_box : classes.box
                  }
                  onClick={() => setTime("long")}
                  style={{ margin: 0 }}
                >
                  <div className={classes.box_header}>
                    <AiOutlineFieldTime className={classes.box_icons_one} />
                    {time === "long" ? (
                      <GrRadialSelected
                        className={classes.box_icons_selected}
                      />
                    ) : (
                      <BsCircle className={classes.box_icons} />
                    )}
                  </div>
                  <div className={classes.box_textcontainer}>
                    <p className={classes.box_text}>
                      Short term or part time work
                    </p>
                    <p className={classes.box_subtext}>Less than 30 hrs/week</p>
                  </div>
                </div>

                <div
                  className={
                    time === "short" ? classes.selected_box : classes.box
                  }
                  onClick={() => setTime("short")}
                >
                  <div className={classes.box_header}>
                    <FaRegCalendarAlt className={classes.box_icons_one} />
                    {time === "short" ? (
                      <GrRadialSelected
                        className={classes.box_icons_selected}
                      />
                    ) : (
                      <BsCircle className={classes.box_icons} />
                    )}
                  </div>
                  <div className={classes.box_textcontainer}>
                    <p className={classes.box_text}>
                      Longer term or full time work
                    </p>
                    <p className={classes.box_subtext}>More than 30 hrs/week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.btn_container}>
              <div />
              <div className={classes.btn_and_cancel}>
                <p
                  className={classes.cancel}
                  onClick={() => {
                    setTime(null);
                    navigate("/");
                  }}
                >
                  Cancel
                </p>
                {time === null ? (
                  <button
                    className={classes.btn_unselected}
                    style={{ marginRight: 10 }}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    className={classes.btn}
                    style={{ marginRight: 10 }}
                    onClick={() => navigate("/title")}
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>

            <footer className={classes.footer}>
              <p
                className={classes.cancel}
                onClick={() => {
                  setTime(null);
                  navigate("/");
                }}
              >
                Cancel
              </p>
              {time === null ? (
                <button
                  className={classes.btn_unselected}
                  style={{ marginRight: 10 }}
                >
                  Continue
                </button>
              ) : (
                <button
                  className={classes.btn}
                  style={{ marginRight: 10 }}
                  onClick={() => navigate("/title")}
                >
                  Continue
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
