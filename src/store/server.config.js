import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDW2_OL44ii8Yhc89UpEV2hIipZ3sVtXcM",
  authDomain: "hiresset.firebaseapp.com",
  projectId: "hiresset",
  storageBucket: "hiresset.appspot.com",
  messagingSenderId: "373189997793",
  appId: "1:373189997793:web:9d7e4bd1abfcf7cc6373a0",
  measurementId: "G-1VR7FMZ9SC",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export default getFirestore();
