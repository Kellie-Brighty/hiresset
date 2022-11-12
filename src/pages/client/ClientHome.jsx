import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import db from "../../store/server.config";
import MainHeader from "../../components/main/MainHeader";
import ClientHomeHeader from "../../components/client_home/ClientHomeHeader";
import { GlobalContext } from "../../store/Context";
import ClientPostings from "../../components/client_home/ClientPostings";
import MainFooter from "../../components/main/MainFooter";

const useStyles = makeStyles((theme) => ({}));

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
          <p>Hireset Loading Animation...</p>
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
