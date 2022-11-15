import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import MainHeader from "../../../components/main/MainHeader";
import { BsSearch } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { Chip } from "@material-ui/core";

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
    width: 450
  },
  right_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    outline: "none",
    marginTop: 10,
    // width: 300,
    padding: 0,
    borderRadius: 5,
    border: "2px solid #ccc",
    height: 30,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
  },
  inner_input: {
    height: "100%",
    border: "none",
    outline: "none",
    width: "100%",
    padding: "0px 10px",
  },
  dropdown: {
    display: "flex",
    flexDirection: "column",
    border: "0.5px solid #ccc",
  },
  dropdown_row: {
    cursor: "pointer",
    textAlign: "start",
    margin: "5px 0px",
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
  chip_container: {
    marginTop: 100,
  },
  chip_grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gridGap: 5,
    margin: '10px 0px'
  },
}));

const Skills = () => {
  const classes = useStyles();
  const [skill, setSkill] = useState(null);
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    if (skill === "") {
      setSkill(null);
    }
  }, [skill]);

  const onSearch = (searchTerm) => {
    setSkill("");
    if (selectedSkills.length === 6) {
      return;
    } else {
      setSelectedSkills((prevstate) => [...prevstate, searchTerm]);
    }
  };

  useEffect(() => {
    console.log(selectedSkills);
  }, [selectedSkills]);

  const handleDelete = (main_skill) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== main_skill));
  };

  const skill_data = [
    { fullname: "ReactJS" },
    { fullname: "AngularJS" },
    { fullname: "VueJS" },
    { fullname: "Javascript" },
    { fullname: "Node" },
    { fullname: "Python" },
    { fullname: "C#" },
    { fullname: "C++" },
    { fullname: "Java" },
    { fullname: "HTML" },
    { fullname: "HTML5" },
    { fullname: "CSS" },
    { fullname: "CSS3" },
    { fullname: "Photoshop" },
    { fullname: "Figma" },
    { fullname: "Adobe XD" },
    { fullname: "Android Studios" },
  ];

  return (
    <div>
      <MainHeader />
      <div className={classes.container}>
        <div className={classes.inner_flex}>
          <div className={classes.content_box}>
            <div className={classes.content_flex}>
              <div className={classes.left}>
                <p className={classes.title_stage}>2/4 Skills</p>
                <p className={classes.title_label}>
                  What are the main skills required for your work?
                </p>
              </div>

              <div className={classes.divider} />

              <div className={classes.right}>
                <p className={classes.right_title}>
                  Search or add up to 6 skills
                </p>
                <div className={classes.input}>
                  <BsSearch />
                  <input
                    type="text"
                    className={classes.inner_input}
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="Start typing..."
                  />
                </div>
                <div className={classes.dropdown}>
                  {skill_data
                    .filter((item) => {
                      const searchTerm = skill && skill.toLowerCase();
                      const fullName = item.fullname.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <div
                        onClick={() => onSearch(item.fullname)}
                        className={classes.dropdown_row}
                        key={item.fullname}
                      >
                        {item.fullname}
                      </div>
                    ))}
                </div>

                {selectedSkills.length > 0 && (
                  <div className={classes.chip_container}>
                    <p>Selected Skills</p>
                    <div className={classes.chip_grid}>
                      {selectedSkills.map((skill) => (
                        <Chip
                          label={skill}
                          onDelete={() => handleDelete(skill)}
                          key={skill.skill}
                          color="primary"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={classes.btn_container}>
              <div />
              <div className={classes.btn_and_cancel}>
                <button
                  className={classes.btn_outlined}
                  onClick={() => {
                    setSkill("");
                    navigate("/title");
                  }}
                >
                  Back
                </button>
                {selectedSkills.length < 1 ? (
                  <button
                    className={classes.btn_unselected}
                    style={{ marginRight: 10 }}
                  >
                    Next: Scope
                  </button>
                ) : (
                  <button
                    className={classes.btn}
                    style={{ marginRight: 10 }}
                    onClick={() => navigate("/scope")}
                  >
                    Next: Scope
                  </button>
                )}
              </div>
            </div>

            <footer className={classes.footer}>
              <IoChevronBackOutline
                onClick={() => {
                  setSkill("");
                  navigate("/title");
                }}
                className={classes.option_dots}
              />
              {selectedSkills.length < 1 ? (
                <button
                  className={classes.btn_unselected}
                  style={{ marginRight: 10 }}
                >
                  Next: Scope
                </button>
              ) : (
                <button
                  className={classes.btn}
                  style={{ marginRight: 10 }}
                  onClick={() => navigate("/scope")}
                >
                  Next: Scope
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
