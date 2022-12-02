import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./talent_components/Sidebar";

const useStyles = makeStyles((theme) => ({
  main_container: {
    maxWidth: 1400,
    margin: "auto",
  },
  inner_flex: {
    display: "flex",
  },
}));

const TalentProjects = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.main_container}>
      <div className={classes.inner_flex}>
        <Sidebar />

        <div>
          Project
        </div>
      </div>
    </div>
  );
};

export default TalentProjects;
