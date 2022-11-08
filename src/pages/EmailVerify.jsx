import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router";
import AuthHeader from "../components/auth/AuthHeader";
import Lottie from "lottie-react";
import mailBoxAnime from "./email_verify.json";
import { doc, getDoc } from "firebase/firestore";
import db from "../store/server.config";

const useStyles = makeStyles((theme) => ({
  inner_flex: {
    display: "flex",
    justifyContent: "center",
    padding: "0px 0px 50px",
  },
  content_box: {
    border: `0.5px solid #ccc`,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      border: "none",
    },
  },
  title_container: {},
  title: {
    fontFamily: "Mirza",
    fontSize: 40,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  sub_title: {
    width: 500,
    margin: "auto",
    textAlign: "center",
    margin: "20px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      width: 300,
      margin: "20px auto",
    },
  },
  email: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
  animation_container: {
    display: "flex",
    justifyContent: "center",
  },
  animation: {
    width: 350,
  },
  btn_container: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
    padding: "0px 20px",
  },
  btn: {
    padding: "10px 30px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
  },
}));

const EmailVerify = () => {
  const classes = useStyles();
  const location = useLocation();
  const firstname = location.state.firstname;
  const email = location.state.email;
  const navigate = useNavigate();
  const [userNavigate, setUserNavigate] = useState(null);

  const checkUserType = async () => {
    const doc_ref = doc(db, "users", email);

    await getDoc(doc_ref).then((snapshot) => {
      if (snapshot.data().user_type === "client") {
        setUserNavigate("/client_home");
      } else {
        setUserNavigate("/talent_home");
      }
    });
  };

  useEffect(() => {
    checkUserType();
  }, []);

  return (
    <div>
      <AuthHeader />
      <div className={classes.inner_flex}>
        <div className={classes.content_box}>
          <div className={classes.title_container}>
            <p className={classes.title}>Hi, {firstname}</p>
            <p className={classes.sub_title}>
              Please check your mail inbox @{" "}
              <span className={classes.email}>{email}</span> for a verification
              message from Hiresset
            </p>
          </div>

          <div className={classes.animation_container}>
            <Lottie
              animationData={mailBoxAnime}
              className={classes.animation}
            />
          </div>

          <div className={classes.btn_container}>
            <button
              className={classes.btn}
              onClick={() => navigate(userNavigate)}
            >
              Continue to home page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
