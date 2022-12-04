import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IoAlertCircleSharp, IoReloadOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.card_background,
    padding: "40px 30px",
    borderRadius: 10    
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.primary.card_white_background,
    width: 150,
    padding: 20,
    borderRadius: 5,
    margin: '20px 10px'
  },
  card_icon: {
    fontSize: 40,
  },
}));

const ProjectOverview = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.title}>Project Overview</p>

        <div className={classes.cards}>
          <div className={classes.card}>
            <IoAlertCircleSharp
              className={classes.card_icon}
              style={{ color: "red" }}
            />
            <div className={classes.card_text}>
              <p>Overdue</p>
              <p style={{ textAlign: "right" }}>1</p>
            </div>
          </div>
          <div className={classes.card}>
            <IoReloadOutline
              className={classes.card_icon}
              style={{ color: "#244cff" }}
            />
            <div className={classes.card_text}>
              <p>Ongoing</p>
              <p style={{ textAlign: "right" }}>8</p>
            </div>
          </div>
          <div className={classes.card}>
            <IoCheckmarkDoneCircleOutline
              className={classes.card_icon}
              style={{ color: "#4DB925" }}
            />
            <div className={classes.card_text}>
              <p>Ongoing</p>
              <p style={{ textAlign: "right" }}>8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
