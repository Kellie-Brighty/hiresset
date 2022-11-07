import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1200,
    margin: "auto",
    paddingBottom: 100,
  },
  inner_flex: {
    display: "flex",
    alignItems: "center",
    height: 493,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
      gap: 0
    }
  },
  image_container: {
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0
    }
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      borderRadius: 0
    }
  },
  text_container: {
    height: "100%",
    background: "#556AAF",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: "0px 20px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0
    }
  },
  title: {
    color: theme.palette.primary.white,
    fontSize: 50,
    fontFamily: "Mirza",
    lineHeight: 0.9,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30
    }
  },
  subtitle: {
    color: theme.palette.primary.white,
  },
  btn: {
    padding: "10px 30px",
    border: "none",
    background: theme.palette.primary.white,
    color: theme.palette.primary.main,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    outline: "none",
    fontWeight: 'bold',
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      fontWeight: 'bold'
    }
  },
}));

const TalentSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.inner_flex}>
        <div className={classes.image_container}>
          <img
            src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=740&t=st=1667381930~exp=1667382530~hmac=023405aa10905b38d7b4828acc86a03011cf0a657e894ec0374c91556b354946"
            alt="image"
            className={classes.image}
          />
        </div>
        <div className={classes.text_container}>
          <div>
            <p className={classes.title}>
              Have a skill? <br /> Find great work.
            </p>
          </div>
          <div>
            <p className={classes.subtitle}>
              Meet clients you’re excited to work with and take your career or
              business to new heights.
            </p>
          </div>
          <div>
            <button className={classes.btn}>Find Opportunities</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
