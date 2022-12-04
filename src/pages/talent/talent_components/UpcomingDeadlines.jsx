import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {},
  title: {
    color: theme.palette.primary.main,
  },
  info_box: {
    background: theme.palette.primary.card_white_background,
    borderRadius: 5,
  },
  info_content: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    padding: "10px 5px",
    margin: '20px 10px'
  },
  content_title: {
    fontWeight: 'bold',
  },
  content_link: {
    marginTop: 10,
    color: theme.palette.secondary.main,
    fontSize: 14
  },
  content_days_left: {
    fontSize: 14
  }
}));

const UpcomingDeadlines = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.title}>Upcoming Deadlines</p>

      <div className={classes.info_box}>
        <div className={classes.info_content}>
          <div>
            <p className={classes.content_title}>E-commerce site</p>
            <p className={classes.content_link}>Shoplants.com</p>
          </div>

          <p className={classes.content_days_left}>2 days left</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
