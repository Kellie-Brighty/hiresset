import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import db from "../../store/server.config";
import MainHeader from "../../components/main/MainHeader";
import ClientHomeHeader from "../../components/client_home/ClientHomeHeader";
import { GlobalContext } from "../../store/Context";
import ClientPostings from "../../components/client_home/ClientPostings";
import MainFooter from "../../components/main/MainFooter";

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
    display: 'flex',
    justifyContent: 'center'
  }
}));

const ClientHome = () => {
  const classes = useStyles();
  const email = localStorage.getItem("hiresset_email");
  const [userData, setUserData] = useState(null);
  const { setUserDetails } = useContext(GlobalContext);

  const fetchUserdata = async () => {
    const doc_ref = doc(db, "users", email);

    await getDoc(doc_ref).then((snapshot) => {
      setUserData(snapshot.data());
      setUserDetails(snapshot.data());
    });
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  return (
    <div>
      <div>
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
            <MainHeader />
            <ClientHomeHeader />
            <ClientPostings />
            <MainFooter />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientHome;
