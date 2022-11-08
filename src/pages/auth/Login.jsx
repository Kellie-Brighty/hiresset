import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AuthHeader from "../../components/auth/AuthHeader";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { useNavigate } from "react-router";

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
  google_btn_container: {
    width: 400,
    margin: "auto",
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      width: 350,
      marginTop: 15,
    },
  },
  google_btn: {
    display: "flex",
    alignItems: "center",
    background: "#2b82fc",
    padding: "1px 1px",
    borderRadius: 50,
    justifyContent: "space-between",
    cursor: "pointer",
    transition: ".2s",
    "&:hover": {
      background: "#045bd4",
      transition: ".2s",
    },
  },
  google_icon_container: {
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    borderRadius: 50,
    padding: 10,
    fontSize: 20,
  },
  google_text: {
    color: theme.palette.primary.white,
  },
  input_container: {
    padding: "0px 10px",
  },
  input_box: {
    display: "flex",
    alignItems: "center",
    border: `1px solid #9c9a9a`,
    padding: "0px 10px",
    borderRadius: 10,
    margin: "20px 0px",
  },
  input: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: 10,
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  password_toggle: {
    fontSize: 20,
    cursor: "pointer",
  },
  label_and_forgotpassword: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
  },
  forgot_password: {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  divider_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  divider: {
    height: 0.5,
    width: "42%",
    background: "#bababa",
  },
  or: {
    margin: "0px 10px",
  },
  lower_part: {
    marginTop: 50,
  },
  dont_have_account: {
    margin: "0px 10px",
    fontSize: 12,
    width: 250,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 200,
    },
  },
  divider_dont: {
    height: 0.5,
    width: "30%",
    background: "#bababa",
  },
  signup_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0px",
  },
  outlined_btn: {
    border: `1px solid ${theme.palette.secondary.main}`,
    outline: "none",
    padding: "10px 30px",
    color: theme.palette.secondary.main,
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: 5,
    background: theme.palette.primary.white,
    margin: "auto",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const revealPassword = () => {
    setType("text");
  };

  const hidePassword = () => {
    setType("password");
  };

  return (
    <div>
      <AuthHeader />
      <div className={classes.inner_flex}>
        <div className={classes.content_box}>
          <div className={classes.title_container}>
            <p className={classes.title}>Log in to Hiresset</p>
          </div>

          <div className={classes.input_container}>
            <div className={classes.input_box}>
              <FaUserAlt />
              <input
                type="email"
                className={classes.input}
                placeholder="Email address"
              />
            </div>

            <div className={classes.input_box}>
              <BsFillLockFill />
              <input
                type={type}
                className={classes.input}
                placeholder="Password"
              />
              {type === "password" ? (
                <AiFillEyeInvisible
                  onClick={() => revealPassword()}
                  className={classes.password_toggle}
                />
              ) : (
                <AiFillEye
                  onClick={() => hidePassword()}
                  className={classes.password_toggle}
                />
              )}
            </div>
          </div>

          <div className={classes.label_and_forgotpassword}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox sx={{ color: "#e3682b" }} />}
                label="Keep me logged in"
                className={classes.checkbox}
              />
            </FormGroup>

            <p className={classes.forgot_password}>Forgot password?</p>
          </div>

          <div className={classes.divider_container}>
            <div className={classes.divider} />
            <p className={classes.or}>or</p>
            <div className={classes.divider} />
          </div>

          <div className={classes.google_btn_container}>
            <div className={classes.google_btn}>
              <div className={classes.google_icon_container}>
                <FcGoogle />
              </div>
              <p className={classes.google_text}>Continue with Google</p>
              <div className={classes.hidden_div} />
            </div>
          </div>

          <div className={classes.lower_part}>
            <div className={classes.divider_container}>
              <div className={classes.divider_dont} />
              <p className={classes.dont_have_account}>
                Don't have an hiresset account?
              </p>
              <div className={classes.divider_dont} />
            </div>

            <div className={classes.signup_container}>
              <button
                className={classes.outlined_btn}
                onClick={() => navigate("/register-as")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
