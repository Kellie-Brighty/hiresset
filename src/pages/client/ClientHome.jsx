import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import db from "../../store/server.config";
import MainHeader from "../../components/main/MainHeader";

const useStyles = makeStyles((theme) => ({}));

const ClientHome = () => {
  const classes = useStyles();
  const email = localStorage.getItem("hiresset_email");
  const [userData, setUserData] = useState(null);

  const fetchUserdata = async () => {
    const doc_ref = doc(db, "users", email);

    await getDoc(doc_ref).then((snapshot) => {
      setUserData(snapshot.data());
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
            <p>Client Space</p>
            <p>
              Welcome,{" "}
              {userData.firstname ? userData.firstname : userData.display_name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientHome;