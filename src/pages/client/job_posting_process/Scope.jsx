import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainHeader from "../../../components/main/MainHeader";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
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
  job_quantity: {},
  radio_expl: {
    fontSize: 14,
    color: theme.palette.secondary.main,
  },
  single_radio: {
    margin: "10px 0px",
  },
  how_long: {
    margin: "40px 0px",
  },
  section_title: {
    fontWeight: "bold",
  },
  experience_level: {
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
    // width: "100%",
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
}));

const Scope = () => {
  const classes = useStyles();
  const [value, setValue] = useState("medium");
  const [timeValue, setTimeValue] = useState("more-than-six");
  const [experienceVal, setExperienceVal] = useState("entry");
  const navigate = useNavigate();

  const savedScope = localStorage.getItem("job_scope_type");
  const savedMonth = localStorage.getItem("job_months");
  const savedExperience = localStorage.getItem("job_experience_type");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTimeValue(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperienceVal(e.target.value);
  };

  useEffect(() => {
    if (value === "medium") {
      localStorage.setItem("job_scope_type", "Medium");
      localStorage.setItem(
        "job_scope_text",
        "Well-defined projects (ex. design business rebrand package (i.e., logos, icons))"
      );
    } else if (value === "large") {
      localStorage.setItem("job_scope_type", "Large");
      localStorage.setItem(
        "job_scope_text",
        "Longer term or complex initiatives (ex. develop and execute a brand strategy (i.e., graphics, positioning))"
      );
    } else if (value === "small") {
      localStorage.setItem("job_scope_type", "Small");
      localStorage.setItem(
        "job_scope_text",
        "Quick and straightforward tasks (ex. create logo for a new product)"
      );
    }

    if (timeValue === "more-than-six") {
      localStorage.setItem("job_months", "More than 6 months");
    } else if (timeValue === "three-to-six") {
      localStorage.setItem("job_months", "3 to 6 months");
    } else if (timeValue === "one-to-three") {
      localStorage.setItem("job_months", "1 to 3 months");
    }

    if (experienceVal === "entry") {
      localStorage.setItem("job_experience_type", "Entry");
      localStorage.setItem(
        "job_experience_text",
        "Looking for someone relatively new to this field"
      );
    } else if (experienceVal === "intermediate") {
      localStorage.setItem("job_experience_type", "Intermediate");
      localStorage.setItem(
        "job_experience_text",
        "Looking for substantial experience in this field"
      );
    } else if (experienceVal === "expert") {
      localStorage.setItem("job_experience_type", "Expert");
      localStorage.setItem(
        "job_experience_text",
        "Looking for comprehensive and deep expertise in this field"
      );
    }
  }, [value, timeValue, experienceVal]);

  useEffect(() => {
    savedScope && setValue(savedScope.toLocaleLowerCase());
    savedMonth && savedMonth === "More than 6 months"
      ? setTimeValue("more-than-six")
      : savedMonth === "3 to 6 months"
      ? setTimeValue("three-to-six")
      : setTimeValue("one-to-three");
    savedExperience && savedExperience === "Entry"
      ? setExperienceVal("entry")
      : savedExperience === "Intermediate"
      ? setExperienceVal("intermediate")
      : setExperienceVal("expert");
  }, []);

  return (
    <div>
      <MainHeader />
      <div className={classes.container}>
        <div className={classes.inner_flex}>
          <div className={classes.content_box}>
            <div className={classes.content_flex}>
              <div className={classes.left}>
                <p className={classes.title_stage}>3/4 Scope</p>
                <p className={classes.title_label}>
                  Next, estimate the scope of your work.
                </p>
                <p className={classes.title_explain}>
                  These aren’t final answers, but this information helps us
                  recommend the right talent for what you need.
                </p>
              </div>

              <div className={classes.divider} />

              <div className={classes.right}>
                <div className={classes.job_quantity}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                    >
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="large"
                          control={<Radio color="primary" />}
                          label="Large"
                        />
                        <p className={classes.radio_expl}>
                          Longer term or complex initiatives (ex. develop and
                          execute a brand strategy (i.e., graphics,
                          positioning))
                        </p>
                      </div>
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="medium"
                          control={<Radio color="primary" />}
                          label="Medium"
                        />
                        <p className={classes.radio_expl}>
                          Well-defined projects (ex. design business rebrand
                          package (i.e., logos, icons))
                        </p>
                      </div>
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="small"
                          control={<Radio color="primary" />}
                          label="Small"
                        />
                        <p className={classes.radio_expl}>
                          Quick and straightforward tasks (ex. create logo for a
                          new product)
                        </p>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className={classes.how_long}>
                  <p className={classes.section_title}>
                    How long will your work take?
                  </p>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-time-radio-buttons-group"
                      value={timeValue}
                      onChange={handleTimeChange}
                    >
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="more-than-six"
                          control={<Radio color="primary" />}
                          label="More than 6 months"
                        />
                      </div>
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="three-to-six"
                          control={<Radio color="primary" />}
                          label="3 to 6 months"
                        />
                      </div>
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="one-to-three"
                          control={<Radio color="primary" />}
                          label="1 to 3 months"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className={classes.experience_level}>
                  <p className={classes.section_title}>
                    What level of experience will it need?
                  </p>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-experience-buttons-group"
                      value={experienceVal}
                      onChange={handleExperienceChange}
                    >
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="entry"
                          control={<Radio color="primary" />}
                          label="Entry Level"
                        />
                        <p className={classes.radio_expl}>
                          Looking for someone relatively new to this field
                        </p>
                      </div>
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="intermediate"
                          control={<Radio color="primary" />}
                          label="Intermediate Level"
                        />
                        <p className={classes.radio_expl}>
                          Looking for substantial experience in this field
                        </p>
                      </div>
                      <div className={classes.single_radio}>
                        <FormControlLabel
                          value="expert"
                          control={<Radio color="primary" />}
                          label="Expert Level"
                        />
                        <p className={classes.radio_expl}>
                          Looking for comprehensive and deep expertise in this
                          field
                        </p>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>

            <div className={classes.btn_container}>
              <div />
              <div className={classes.btn_and_cancel}>
                <button
                  className={classes.btn_outlined}
                  onClick={() => {
                    navigate("/skills");
                  }}
                >
                  Back
                </button>
                <button
                  className={classes.btn}
                  style={{ marginRight: 10 }}
                  onClick={() => navigate("/budget")}
                >
                  Next: Budget
                </button>
              </div>
            </div>

            <footer className={classes.footer}>
              <IoChevronBackOutline
                onClick={() => {
                  navigate("/skills");
                }}
                className={classes.option_dots}
              />
              <button
                className={classes.btn}
                style={{ marginRight: 10 }}
                onClick={() => navigate("/budget")}
              >
                Next: Budget
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
