import React, { useEffect, useState } from "react";
import { makeStyles, Drawer, Tooltip, Menu, MenuItem } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import db from "../../store/server.config";
import Sidebar from "./talent_components/Sidebar";
import { MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import moment from "moment/moment";
import { AiFillCloseCircle } from "react-icons/ai";
import ProjectOverview from "./talent_components/ProjectOverview";
import UpcomingDeadlines from "./talent_components/UpcomingDeadlines";

const useStyles = makeStyles((theme) => ({
  loader_image: {
    width: 200,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inner_flex: {
    marginTop: 200,
  },
  loader_image_container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  main_container: {
    maxWidth: 1400,
    margin: "auto",
  },
  inner_flex_container: {
    display: "flex",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    // background: "yellow",
  },
  greeting: {
    fontWeight: "bold",
  },
  greeting_text: {
    marginTop: 10,
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  notification_container: {
    background: theme.palette.primary.light_card_background,
    padding: 10,
    borderRadius: 10,
    position: "relative",
    margin: "0px 15px",
    cursor: "pointer",
  },
  notify: {
    fontSize: 20,
  },
  notify_count: {
    position: "absolute",
    top: 6,
    background: "#f13712",
    color: "#fff",
    borderRadius: 50,
    padding: "0px 5px",
    fontSize: 12,
    right: 6,
  },
  profile_container: {
    display: "flex",
    alignItems: "center",
    margin: "0px 15px",
    background: theme.palette.primary.light_card_background,
    padding: 10,
    borderRadius: 10,
    cursor: "pointer",
  },
  user: {
    fontSize: 30,
    margin: "0px 5px",
  },
  names: {
    fontSize: 12,
    margin: "0px 5px",
  },
  name: {
    fontWeight: "bold",
  },
  time_container: {
    textAlign: "right",
    paddingRight: 15,
    marginTop: 10,
  },
  time: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  notification_body: {
    width: 400,
    paddingTop: 20,
  },
  close_notif: {
    cursor: "pointer",
    fontSize: 18,
  },
  notif_box: {
    background: theme.palette.primary.light_card_background,
    margin: "15px 0px",
    padding: 10,
    borderRadius: 10,
  },
  notif_text: {
    fontWeight: "bold",
  },
  notif_time: {
    fontSize: 14,
    marginTop: 10,
  },
  notif_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    padding: 20,
    display: "flex",
  },
  left_body: {
    flex: "50%",
    marginRight: 30,
  },
  right_body: {
    flexBasis: "40%",
    background: theme.palette.primary.card_background,
    padding: "40px 30px",
    borderRadius: 10,
    width: 200
  },
}));

const TalentHome = () => {
  const classes = useStyles();
  const email = localStorage.getItem("hiresset_email");
  const [userData, setUserData] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const fetchUserdata = async () => {
    const doc_ref = doc(db, "users", email);

    await getDoc(doc_ref).then((snapshot) => {
      setUserData(snapshot.data());
      console.log(snapshot.data());
    });
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  const notifications = [
    {
      notif_text: "You have a new job from Francis",
      time: "09:34pm, today",
    },
    {
      notif_text: "You were awarded a milestone",
      time: "04:20pm, today",
    },
    {
      notif_text: "You have a new message from Mary",
      time: "07:14am, today",
    },
  ];

  return (
    <div className={classes.main_container}>
      <div className={classes.inner_flex_container}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          {userData === null ? (
            <div className={classes.container}>
              <div className={classes.inner_flex}>
                <div className={classes.loader_image_container}>
                  <img
                    src="main-logo.png"
                    alt=""
                    className={classes.loader_image}
                  />
                </div>
                <p>Hireset Loading Animation...</p>
              </div>
            </div>
          ) : (
            <div>
              <div className={classes.header}>
                <div className={classes.left}>
                  <p className={classes.greeting}>
                    Good day,{" "}
                    {userData.firstname
                      ? userData.firstname
                      : userData.display_name}
                  </p>
                  <p className={classes.greeting_text}>
                    Have an amazing and productive time with ease
                  </p>
                </div>

                <div>
                  <div className={classes.right}>
                    <Tooltip title="Notifications">
                      <div
                        className={classes.notification_container}
                        onClick={() => openDrawer()}
                      >
                        <MdNotifications className={classes.notify} />
                        <div className={classes.notify_count}>2</div>
                      </div>
                    </Tooltip>

                    <Tooltip title="Profile Settings">
                      <div
                        className={classes.profile_container}
                        onClick={handleClick}
                      >
                        <FaUserCircle className={classes.user} />
                        <div className={classes.names}>
                          <p className={classes.name}>
                            {userData.firstname
                              ? userData.firstname
                              : userData.display_name}
                          </p>
                          <p className={classes.work}>ReactJS Developer</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>

                  <div className={classes.time_container}>
                    <p className={classes.time}>
                      {moment().format("DD MMM YYYY")}
                    </p>
                  </div>
                </div>

                <Drawer
                  open={drawerOpen}
                  onClose={() => closeDrawer()}
                  anchor="right"
                  PaperProps={{
                    style: {
                      padding: 10,
                    },
                  }}
                >
                  <div className={classes.notification_body}>
                    <div>
                      <p className={classes.notif_title}>My Notifications</p>
                    </div>
                    {notifications.length < 1 ? (
                      <div style={{ textAlign: "center", paddingTop: 20 }}>
                        <p>You have no notifications</p>
                      </div>
                    ) : (
                      <div>
                        {notifications.map((notification) => (
                          <div
                            key={notification.time}
                            className={classes.notif_box}
                          >
                            <div style={{ textAlign: "right" }}>
                              <AiFillCloseCircle
                                className={classes.close_notif}
                              />
                            </div>
                            <p className={classes.notif_text}>
                              {notification.notif_text}
                            </p>
                            <p className={classes.notif_time}>
                              {notification.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Drawer>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>

              <div className={classes.body}>
                <div className={classes.left_body}>
                  <ProjectOverview />
                </div>

                <div className={classes.right_body}>
                  <UpcomingDeadlines />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentHome;
