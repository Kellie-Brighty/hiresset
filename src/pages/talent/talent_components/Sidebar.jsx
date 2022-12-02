import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import {
  BsHandbag,
  BsHandbagFill,
  BsFunnelFill,
  BsFunnel,
} from "react-icons/bs";
import {
  IoPeopleOutline,
  IoPeople,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { AiOutlineClockCircle, AiFillClockCircle } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router";
import { auth } from "../../../store/server.config";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100vh",
    background: theme.palette.primary.main,
    paddingRight: 50,
  },
  image_container: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 0px",
  },
  loader_image_sidebar: {
    width: 150,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
  sidebar_options: {},
  option: {
    display: "flex",
    alignItems: "center",
    background: "transparent",
    padding: "10px 0px",
    paddingRight: 80,
    paddingLeft: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    cursor: "pointer",
    color: "#fff",
    margin: "20px 0px",
  },
  option_selected: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "10px 0px",
    paddingRight: 80,
    paddingLeft: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    cursor: "pointer",
    color: theme.palette.primary.main,
    margin: "20px 0px",
  },
  option_icon: {
    fontSize: 25,
  },
  option_label: {
    fontSize: 18,
    marginLeft: 20,
  },
  final_options: {
    marginTop: 60,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div className={classes.sidebar}>
      <div className={classes.image_container}>
        <img
          src="hiresset_white.png"
          alt=""
          className={classes.loader_image_sidebar}
        />
      </div>

      <div className={classes.sidebar_options}>
        <div
          className={
            pathname === "/talent_home"
              ? classes.option_selected
              : classes.option
          }
          onClick={() => navigate("/talent_home")}
        >
          {pathname === "/talent_home" ? (
            <MdDashboard className={classes.option_icon} />
          ) : (
            <MdOutlineDashboard className={classes.option_icon} />
          )}
          <p className={classes.option_label}>Dashboard</p>
        </div>

        <div
          className={
            pathname === "/talent_projects"
              ? classes.option_selected
              : classes.option
          }
          onClick={() => navigate("/talent_projects")}
        >
          {pathname === "/talent_projects" ? (
            <BsHandbagFill className={classes.option_icon} />
          ) : (
            <BsHandbag className={classes.option_icon} />
          )}
          <p className={classes.option_label}>Projects</p>
        </div>

        <div
          className={
            pathname === "/talent_clients"
              ? classes.option_selected
              : classes.option
          }
          onClick={() => navigate("/talent_clients")}
        >
          {pathname === "/talent_clients" ? (
            <IoPeople className={classes.option_icon} />
          ) : (
            <IoPeopleOutline className={classes.option_icon} />
          )}
          <p className={classes.option_label}>Clients</p>
        </div>

        <div
          className={
            pathname === "/talent_activity"
              ? classes.option_selected
              : classes.option
          }
          onClick={() => navigate("/talent_activity")}
        >
          {pathname === "/talent_activity" ? (
            <AiFillClockCircle className={classes.option_icon} />
          ) : (
            <AiOutlineClockCircle className={classes.option_icon} />
          )}
          <p className={classes.option_label}>Activities</p>
        </div>

        <div
          className={
            pathname === "/talent_payment"
              ? classes.option_selected
              : classes.option
          }
          onClick={() => navigate("/talent_payment")}
        >
          {pathname === "/talent_payment" ? (
            <BsFunnelFill className={classes.option_icon} />
          ) : (
            <BsFunnel className={classes.option_icon} />
          )}
          <p className={classes.option_label}>Payments</p>
        </div>
      </div>

      <div className={classes.final_options}>
        <div
          className={
            pathname === "/talent_settings"
              ? classes.option_selected
              : classes.option
          }
          onClick={() => navigate("/talent_settings")}
        >
          {pathname === "/talent_settings" ? (
            <IoSettings className={classes.option_icon} />
          ) : (
            <IoSettingsOutline className={classes.option_icon} />
          )}
          <p className={classes.option_label}>Settings</p>
        </div>

        <div
          className={classes.option}
          onClick={() => {
            auth.signOut();
            localStorage.clear();
            navigate("/logout_success");
          }}
        >
          <BiLogOutCircle className={classes.option_icon} />
          <p className={classes.option_label}>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
