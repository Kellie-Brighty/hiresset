import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainHeader from "../../../components/main/MainHeader";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { GrRadialSelected } from "react-icons/gr";
import { BiDollar } from "react-icons/bi";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdPriceChange } from "react-icons/md";
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
    marginTop: 30,
    marginBottom: 50,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      border: `none`,
      marginTop: 5,
      borderRadius: 10,
      marginBottom: 60,
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
    height: 300,
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
  select_box_container: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  box: {
    border: `0.5px solid #ccc`,
    padding: 10,
    borderRadius: 5,
    margin: "0px 10px",
    cursor: "pointer",
    transition: ".2s",
    width: 180,
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0px",
      width: 250,
    },
  },
  selected_box: {
    border: `3px solid ${theme.palette.primary.main}`,
    padding: 10,
    borderRadius: 5,
    margin: "0px 10px",
    cursor: "pointer",
    background: "#e3682b1f",
    transition: ".2s",
    width: 180,
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0px",
      width: 250,
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
  hourly_quote: {
    marginTop: 30,
  },
  quote_title: {
    fontWeight: "bold",
  },
  input_container: {
    display: "flex",
    alignItems: "center",
  },
  input_box: {
    marginTop: 10,
    width: 180,
    padding: "10px 20px",
    borderRadius: 5,
    border: "2px solid #ccc",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  input: {
    height: "100%",
    width: "100%",
    outline: "none",
    border: "none",
    padding: "0px 10px",
  },
  per_hour: {
    marginLeft: 10,
    fontWeight: "bold",
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
  quote_text: {
    margin: "10px 0px",
    color: theme.palette.secondary.main,
    fontSize: 14,
  },
}));

const Budget = () => {
  const classes = useStyles();
  const [selectedval, setSlectedVal] = useState("hourly");
  const [fixed, setFixed] = useState("");
  const [hourly, setHourly] = useState("");
  const navigate = useNavigate();

  const savedJobType = localStorage.getItem("job_budget_type");

  useEffect(() => {
    savedJobType && savedJobType === "Hourly Rate"
      ? setSlectedVal("hourly")
      : savedJobType === "Fixed Project Budget"
      ? setSlectedVal("fixed")
      : setSlectedVal(null);
  }, []);

  return (
    <div>
      <MainHeader />
      <div className={classes.container}>
        <div className={classes.inner_flex}>
          <div className={classes.content_box}>
            <div className={classes.content_flex}>
              <div className={classes.left}>
                <p className={classes.title_stage}>4/4 Budget</p>
                <p className={classes.title_label}>
                  Tell us about your budget.
                </p>
                <p className={classes.title_explain}>
                  This will help us match you to talent within your range.
                </p>
              </div>

              <div className={classes.divider} />

              <div className={classes.right}>
                <div className={classes.select_box_container}>
                  <div
                    className={
                      selectedval === "hourly"
                        ? classes.selected_box
                        : classes.box
                    }
                    onClick={() => {
                      setSlectedVal("hourly");
                      localStorage.setItem("job_budget_type", "Hourly Rate");
                    }}
                    style={{ margin: 0 }}
                  >
                    <div className={classes.box_header}>
                      <TfiAlarmClock className={classes.box_icons_one} />
                      {selectedval === "hourly" ? (
                        <GrRadialSelected
                          className={classes.box_icons_selected}
                        />
                      ) : (
                        <BsCircle className={classes.box_icons} />
                      )}
                    </div>
                    <div className={classes.box_textcontainer}>
                      <p className={classes.box_text}>Hourly rate</p>
                    </div>
                  </div>

                  <div
                    className={
                      selectedval === "fixed"
                        ? classes.selected_box
                        : classes.box
                    }
                    onClick={() => {
                      setSlectedVal("fixed");
                      localStorage.setItem(
                        "job_budget_type",
                        "Fixed Project Budget"
                      );
                    }}
                  >
                    <div className={classes.box_header}>
                      <MdPriceChange className={classes.box_icons_one} />
                      {selectedval === "fixed" ? (
                        <GrRadialSelected
                          className={classes.box_icons_selected}
                        />
                      ) : (
                        <BsCircle className={classes.box_icons} />
                      )}
                    </div>
                    <div className={classes.box_textcontainer}>
                      <p className={classes.box_text}>Project budget</p>
                    </div>
                  </div>
                </div>

                {selectedval === "hourly" ? (
                  <div className={classes.hourly_quote}>
                    <p className={classes.quote_title}>Max of</p>
                    <div className={classes.input_container}>
                      <div className={classes.input_box}>
                        <BiDollar />
                        <input
                          type="number"
                          className={classes.input}
                          value={hourly}
                          onChange={(e) => setHourly(e.target.value)}
                        />
                      </div>
                      <p className={classes.per_hour}>/hour</p>
                    </div>
                  </div>
                ) : selectedval === "fixed" ? (
                  <div className={classes.hourly_quote}>
                    <p className={classes.quote_title}>
                      Maximum project budget (USD)
                    </p>
                    <div className={classes.input_container}>
                      <div className={classes.input_box}>
                        <BiDollar />
                        <input
                          type="number"
                          className={classes.input}
                          value={fixed}
                          onChange={(e) => setFixed(e.target.value)}
                        />
                      </div>
                    </div>

                    <p className={classes.quote_text}>
                      You will have the option to create milestones which divide
                      your project into manageable phases.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className={classes.btn_container}>
              <div />
              <div className={classes.btn_and_cancel}>
                <button
                  className={classes.btn_outlined}
                  onClick={() => {
                    navigate("/scope");
                  }}
                >
                  Back
                </button>
                {selectedval === "hourly" && hourly === "" ? (
                  <button
                    className={classes.btn_unselected}
                    style={{ marginRight: 10 }}
                  >
                    Next: Review Job Post
                  </button>
                ) : selectedval === "fixed" && fixed === "" ? (
                  <button
                    className={classes.btn_unselected}
                    style={{ marginRight: 10 }}
                  >
                    Next: Review Job Post
                  </button>
                ) : (
                  <button
                    className={classes.btn}
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      if (selectedval === "hourly") {
                        localStorage.setItem("job_budget_price", hourly);
                      } else {
                        localStorage.setItem("job_budget_price", fixed);
                      }
                      navigate("/review_job_post");
                    }}
                  >
                    Next: Review Job Post
                  </button>
                )}
              </div>
            </div>

            <footer className={classes.footer}>
              <IoChevronBackOutline
                onClick={() => {
                  navigate("/scope");
                }}
                className={classes.option_dots}
              />
              {selectedval === "hourly" && hourly === "" ? (
                <button
                  className={classes.btn_unselected}
                  style={{ marginRight: 10 }}
                >
                  Next: Review Job Post
                </button>
              ) : selectedval === "fixed" && fixed === "" ? (
                <button
                  className={classes.btn_unselected}
                  style={{ marginRight: 10 }}
                >
                  Next: Review Job Post
                </button>
              ) : (
                <button
                  className={classes.btn}
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    if (selectedval === "hourly") {
                      localStorage.setItem("job_budget_price", hourly);
                    } else {
                      localStorage.setItem("job_budget_price", fixed);
                    }
                    navigate("/review_job_post");
                  }}
                >
                  Next: Review Job Post
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
