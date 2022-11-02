import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "auto",
    width: "100%",
    position: "fixed",
  },
  fixed_container: {
    maxWidth: 1400,
    margin: "auto",
    width: "100%",
    position: "fixed",
    background: theme.palette.primary.white,
  },
  inner_flex: {
    padding: "30px 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 150,
  },
  header_options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header_option: {
    margin: "0px 20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  btn: {
    padding: "10px 30px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    outline: "none",
  },
  extra_box: {
    padding: "20px 50px",
    background: theme.palette.primary.main,
    transition: ".5s",
  },
  inputnsearch: {
    width: 600,
    background: theme.palette.secondary.main,
    display: 'flex',
    borderRadius: 10
  },
  search_input: {
    width: "80%",
    padding: "5px 10px",
    outline: "none",
    border: "none",
    height: 35,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  search_btn: {
    width: '18%',
    border: 'none',
    outline: 'none',
    background: theme.palette.secondary.main,
    color: theme.palette.primary.white,
    cursor: 'pointer',
    fontSize: 16,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontWeight: 'bold'
  }
}));

const LandingHeader = () => {
  const classes = useStyles();
  const [headerStyle, setHeaderStyle] = useState("container");
  const [showExtra, setShowExtra] = useState(false);

  const navRef = useRef();
  navRef.current = headerStyle;

  const ele = useRef();

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setHeaderStyle("fixed_container");
        setShowExtra(true);
      } else {
        setHeaderStyle("container");
        setShowExtra(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes[navRef.current]}>
      <div className={classes.inner_flex}>
        <img src="main-logo.png" className={classes.logo} />

        <div className={classes.header_options}>
          <p className={classes.header_option} ref={ele} >Enterprise</p>
          <p className={classes.header_option}>Explore</p>
          <p className={classes.header_option}>Sign In</p>
          <button className={classes.btn}>Get Started</button>
        </div>
      </div>
      {showExtra && (
        <div
          data-aos="slide-up"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className={classes.extra_box}
        >
          <div className={classes.inputnsearch}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className={classes.search_input}
            />
            <button className={classes.search_btn}>Search</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingHeader;
