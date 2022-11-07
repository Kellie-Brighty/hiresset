import React, { useEffect, useState, useRef } from "react";
import { Drawer, makeStyles } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigate, useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { RiMenu4Line } from "react-icons/ri";
import { CgMenuHotdog } from "react-icons/cg";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "auto",
    top: 0,
    left: 0,
    position: "sticky",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      boxShadow: "none",
    },
  },
  fixed_container: {
    maxWidth: 1400,
    margin: "auto",
    width: "100%",
    top: 0,
    left: 0,
    position: "sticky",
    background: theme.palette.primary.white,
    zIndex: 2,
    [theme.breakpoints.down("xs")]: {},
  },
  inner_flex: {
    padding: "30px 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 20px",
    },
  },
  logo: {
    width: 150,
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  header_options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  header_option: {
    margin: "0px 20px",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      margin: '15px 0px',
    }
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
    [theme.breakpoints.down("xs")]: {
      marginTop: 20
    }
  },
  extra_box: {
    padding: "20px 50px",
    background: theme.palette.primary.main,
    transition: ".5s",
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
    },
  },
  inputnsearch: {
    width: 600,
    background: theme.palette.secondary.main,
    display: "flex",
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      width: 300,
      margin: "auto",
    },
  },
  search_input: {
    width: "80%",
    padding: "5px 10px",
    outline: "none",
    border: "none",
    height: 35,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    [theme.breakpoints.down("xs")]: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  search_btn: {
    width: "18%",
    border: "none",
    outline: "none",
    background: theme.palette.secondary.main,
    color: theme.palette.primary.white,
    cursor: "pointer",
    fontSize: 16,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  search_btn_mobile: {
    border: "none",
    outline: "none",
    background: theme.palette.secondary.main,
    color: theme.palette.primary.white,
    cursor: "pointer",
    fontSize: 16,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobile_search_icon: {
    marginLeft: 10,
  },
  menu_icon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    fontSize: 30,
    color: theme.palette.primary.main,
  },
  header_options_mobile: {
    display: "flex",
    flexDirection: 'column',
    padding: '10px 20px'
  },
}));

const LandingHeader = () => {
  const classes = useStyles();
  const [headerStyle, setHeaderStyle] = useState("container");
  const [showExtra, setShowExtra] = useState(false);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navRef = useRef();
  navRef.current = headerStyle;

  const ele = useRef();

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      console.log(window.scrollY);
      const show = window.scrollY > 50 && window.scrollY < 2220;
      if (show) {
        setHeaderStyle("fixed_container");
        setShowExtra(true);
      } else {
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
          <p className={classes.header_option} ref={ele}>
            Enterprise
          </p>
          <p className={classes.header_option}>Explore</p>
          <p
            className={classes.header_option}
            onClick={() => navigate("/login")}
          >
            Sign In
          </p>
          <button
            className={classes.btn}
            onClick={() => navigate("/register-as")}
          >
            Get Started
          </button>
        </div>
        <div className={classes.menu_icon}>
          <CgMenuHotdog onClick={() => setDrawerOpen(true)} />
        </div>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className={classes.header_options_mobile}>
            <p className={classes.header_option} ref={ele}>
              Enterprise
            </p>
            <p className={classes.header_option}>Explore</p>
            <p
              className={classes.header_option}
              onClick={() => navigate("/login")}
            >
              Sign In
            </p>
            <button
              className={classes.btn}
              onClick={() => navigate("/register-as")}
            >
              Get Started
            </button>
          </div>
        </Drawer>
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
            <button className={classes.search_btn_mobile}>
              <FiSearch className={classes.mobile_search_icon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingHeader;
