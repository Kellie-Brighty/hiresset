import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../../store/Context";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 50,
    maxWidth: 1400,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
    },
  },
  inner_flex: {
    display: "flex",
    alignItems: "center",
    padding: "0px 200px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 20px",
      alignItems: "stretch",
    },
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  button_section: {
    display: "flex",
    alignItems: "center",
    width: 650,
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  btn_outlined: {
    padding: "10px 20px",
    border: `1px solid ${theme.palette.primary.main}`,
    background: "transparent",
    color: theme.palette.primary.main,
    fontSize: 16,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  balance: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "right",
    "& span": {
      fontWeight: "bold",
    },
    [theme.breakpoints.up("md")]: {
      display: 'none'
    }
  },
}));

const ClientHomeHeader = () => {
  const classes = useStyles();
  const { userDetails } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <div className={classes.inner_flex}>
        <div className={classes.header_title_and_name}>
          <p className={classes.title}>Your dashboard</p>
          <p className={classes.name}>
            {userDetails && userDetails.firstname
              ? userDetails.firstname + " " + userDetails.lastname
              : userDetails.display_name}
          </p>
        </div>

        <div>
          <div className={classes.button_section}>
            <button
              className={classes.btn_outlined}
              style={{ marginRight: 10 }}
            >
              Browse Project Category
            </button>
            <button
              className={classes.btn}
              onClick={() => navigate("/getting_started")}
            >
              Post a Job
            </button>
          </div>
          <p className={classes.balance}>
            Available Balance: <span>$20.23</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default ClientHomeHeader;
