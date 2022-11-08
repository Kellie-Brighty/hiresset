import React, { useState } from "react";
import AuthHeader from "../../components/auth/AuthHeader";
import { makeStyles } from "@material-ui/styles";
import { FcGoogle } from "react-icons/fc";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import db, { auth } from "../../store/server.config";

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
    width: 600,
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
  hidden_div: {},
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
  name_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  name_input: {
    margin: "auto",
    width: "35%",
    border: `1px solid #9c9a9a`,
    outline: "none",
    padding: "10px 20px",
    borderRadius: 8,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      margin: "8px auto",
    },
  },
  other_fields: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      marginTop: 2,
    },
  },
  email_password_country: {
    margin: "auto",
    width: "85%",
    border: `1px solid #9c9a9a`,
    outline: "none",
    padding: "10px 20px",
    borderRadius: 8,
    margin: "10px auto",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      margin: "8px auto",
    },
  },
  checkbox_container: {
    padding: "0px 25px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 20px",
    },
  },
  checkbox: {
    margin: "5px 0px",
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0px",
    },
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
  final_content: {
    textAlign: "center",
  },
  desktop_content: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "& span": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  mobile_content: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    "& span": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  errors: {
    color: "red",
    textAlign: "center",
    width: 400,
    margin: "15px auto",
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
}));

const ClientSignup = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [termsChecked, setTermsChecked] = useState(false);

  const signup = () => {
    setLoading(true);
    setErrors(null);

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      nationality === ""
    ) {
      setLoading(false);
      setErrors("Please, no field should be empty.");
    } else if (termsChecked === false) {
      setLoading(false);
      setErrors("Do you not agree with our terms of service?");
    } else {
      try {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (usercredentials) => {
            localStorage.setItem("hiresset_email", email);
            localStorage.setItem("hiresset_uid", usercredentials.user.uid);
            await setDoc(doc(db, "users", email), {
              firstname,
              lastname,
              email,
              nationality,
              password,
              uid: usercredentials.user.uid,
              user_type: "client",
            });
            setLoading(false);
            navigate("/email_verify", {
              state: {
                email,
                firstname,
              },
            });
          })
          .catch((err) => {
            console.log(err.message);
            setLoading(false);
            if (
              err.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              setErrors(
                "This email already exists. Please sign up using a different one."
              );
            }
          });
      } catch (err) {
        console.log(err);
        setLoading(false);
        setErrors(err);
      }
    }
  };

  return (
    <div>
      <AuthHeader />
      <div className={classes.inner_flex}>
        <div className={classes.content_box}>
          <div className={classes.title_container}>
            <p className={classes.title}>Sign up to hire talent</p>
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

          <div className={classes.divider_container}>
            <div className={classes.divider} />
            <p className={classes.or}>or</p>
            <div className={classes.divider} />
          </div>

          <div className={classes.name_container}>
            <input
              type="text"
              className={classes.name_input}
              placeholder="First name"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
                setErrors(null);
              }}
            />
            <input
              type="text"
              className={classes.name_input}
              placeholder="Last name"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
                setErrors(null);
              }}
            />
          </div>

          <div className={classes.other_fields}>
            <input
              type="email"
              className={classes.email_password_country}
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors(null);
              }}
            />
            <input
              type="password"
              className={classes.email_password_country}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors(null);
              }}
            />
            <input
              type="text"
              className={classes.email_password_country}
              placeholder="Nationality"
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
                setErrors(null);
              }}
            />
          </div>

          <div className={classes.checkbox_container}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox sx={{ color: "#e3682b" }} />}
                label="Send me emails with tips on how to find talent that fits my needs."
                className={classes.checkbox}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsChecked}
                    onChange={() => {
                      setTermsChecked((prevstate) => !prevstate);
                      setErrors(null);
                    }}
                  />
                }
                label="
                Yes, I understand and agree to the Hiresset Terms of Service."
                className={classes.checkbox}
              />
            </FormGroup>
          </div>

          {errors && <p className={classes.errors}>{errors}</p>}

          <div className={classes.btn_container}>
            <button className={classes.btn} onClick={() => signup()}>
              {loading ? "Please wait..." : "Create my account"}
            </button>
          </div>

          <div className={classes.final_content}>
            <p className={classes.desktop_content}>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Log In</span>
            </p>
            <p className={classes.mobile_content}>
              Looking for work?{" "}
              <span onClick={() => navigate("/talent_signup")}>
                Apply as talent
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSignup;
