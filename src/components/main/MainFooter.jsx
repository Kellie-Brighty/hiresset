import React from "react";
import { makeStyles } from "@material-ui/styles";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillApple,
  AiFillAndroid,
} from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    background: theme.palette.primary.footer,
    padding: "100px 0px",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0px",
    },
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "40px 0px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
      padding: "20px 0px",
    },
  },
  for_client: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  title: {
    color: "#feffd9",
  },
  option_map: {
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  option: {
    margin: "10px 0px",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.white,
  },
  below_options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 120px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  follow: {
    display: "flex",
    alignItems: "center",
  },
  follow_text: {
    color: theme.palette.primary.white,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  icon_container: {
    border: `1px solid #feffd9`,
    padding: 10,
    borderRadius: 50,
    margin: "0px 10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  icon: {
    color: theme.palette.primary.white,
  },
  divider: {
    height: 0.1,
    width: "100%",
    background: "#feffd9",
    margin: "20px 0px",
  },
  divider_container: {
    padding: "0px 120px",
  },
  trademark_container: {
    padding: "0px 120px",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
      padding: 0,
    },
  },
  trade_mark: {
    color: theme.palette.primary.white,
    [theme.breakpoints.down("xs")]: {
    },
  },
  trade_mark_options: {
    display: "flex",
    alignItems: "center",
    marginLeft: 50,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      marginLeft: 0,
      marginTop: 20
    },
  },
  trademark_link: {
    textDecoration: "none",
    color: theme.palette.primary.white,
    margin: "0px 10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      textDecoration: 'underline'
    }
  },
}));

const MainFooter = () => {
  const classes = useStyles();

  const clientOptions = [
    "About Us",
    "Feedback",
    "Community"
  ];

  const talentOptions = [
    "Trust, Safety & Security",
    "Help & Support",
    "Hiresset foundation"
  ];

  const resourceOptions = [
    "Help & Support",
    "Success Stories",
    "Project Catalog",
    "Talent Scout",
  ];

  const companyOptions = [
    "About Us",
    "Leadership",
    "Investor Relations",
    "Careers",
    "Our Impact",

  ];

  const trademarkOptions = [
    "Terms of Service",
    "Privacy Policy",
    "CA Notice at Collection",
    "Cookie Settings",
    "Accessibility",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.inner_flex}>
        <div className={classes.for_client}>
          <div className={classes.option_map}>
            {clientOptions.map((option) => (
              <div className={classes.option}>
                <a href="" className={classes.link}>
                  {option}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.for_client}>
          <div className={classes.option_map}>
            {talentOptions.map((option) => (
              <div className={classes.option}>
                <a href="" className={classes.link}>
                  {option}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.for_client}>
          <div className={classes.option_map}>
            {resourceOptions.map((option) => (
              <div className={classes.option}>
                <a href="" className={classes.link}>
                  {option}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.for_client}>
          <div className={classes.option_map}>
            {companyOptions.map((option) => (
              <div className={classes.option}>
                <a href="" className={classes.link}>
                  {option}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.below_options}>
        <div className={classes.follow}>
          <p className={classes.follow_text}>Follow Us</p>
          <div className={classes.icon_container}>
            <ImFacebook className={classes.icon} />
          </div>
          <div className={classes.icon_container}>
            <FaLinkedinIn className={classes.icon} />
          </div>
          <div className={classes.icon_container}>
            <AiOutlineTwitter className={classes.icon} />
          </div>
          <div className={classes.icon_container}>
            <AiFillYoutube className={classes.icon} />
          </div>
          <div className={classes.icon_container}>
            <AiOutlineInstagram className={classes.icon} />
          </div>
        </div>

        <div className={classes.mobile_app}>
          <div className={classes.follow}>
            <p className={classes.follow_text}>Mobile app</p>
            <div className={classes.icon_container}>
              <AiFillApple className={classes.icon} />
            </div>
            <div className={classes.icon_container}>
              <AiFillAndroid className={classes.icon} />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.divider_container}>
        <div className={classes.divider} />
      </div>

      <div className={classes.trademark_container}>
        <p className={classes.trade_mark}>
          &#169; 2022 Hiresset&#174; Global Inc.
        </p>
        <div className={classes.trade_mark_options}>
          {trademarkOptions.map((option) => (
            <a href="" className={classes.trademark_link}>
              {option}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
