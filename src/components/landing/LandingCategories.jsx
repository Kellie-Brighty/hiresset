import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1200,
    margin: "auto",
  },
  inner_flex: {
    padding: "0px 20px",
  },
  title: {
    fontFamily: "Marcellus",
    fontSize: 55,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  category_grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gridGap: 20,
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  box: {
    width: 230,
    height: 100,
    background: "#e3682b29",
    cursor: "pointer",
    transition: ".5s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    "&:hover": {
      background: "#e3682b4d",
      transition: ".5s",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 0,
    },
  },
  subs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px 0px",
  },
  category_title: {
    fontSize: 15,
    fontWeight: "bold",
  },
}));

const LandingCategories = () => {
  const classes = useStyles();

  const categories = [
    {
      title: "Development & IT",
      rating: "4.85/5",
      skiles: 1867,
    },
    {
      title: "Design & Creative",
      rating: "4.85/5",
      skiles: 1867,
    },
    {
      title: "Sales & Marketing",
      rating: "4.85/5",
      skiles: 1867,
    },
    {
      title: "Writing & Translation",
      rating: "4.85/5",
      skiles: 1867,
    },
    {
      title: "Admin & Customer Support",
      rating: "4.85/5",
      skiles: 1867,
    },
    {
      title: "Finance & Accounting",
      rating: "4.85/5",
      skiles: 1867,
    },
    {
      title: "Engineering & Culture",
      rating: "4.85/5",
      skiles: 1867,
    },
    {
      title: "Legal",
      rating: "4.85/5",
      skiles: 1867,
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.inner_flex}>
        <p className={classes.title}>Browse talent by category</p>

        <div className={classes.category_grid}>
          {categories.map((category) => (
            <div className={classes.box} key={category.title}>
              <div>
                <p className={classes.category_title}>{category.title}</p>
                <div className={classes.subs}>
                  <p>{category.rating}</p>
                  <p>{category.skiles}skills</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingCategories;
