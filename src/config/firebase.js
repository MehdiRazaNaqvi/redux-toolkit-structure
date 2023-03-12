
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyAaNYH_kPGujPVr78xnPn77wtu06JQww2w",
  authDomain: "authentication-f.firebaseapp.com",
  projectId: "authentication-f",
  storageBucket: "authentication-f.appspot.com",
  messagingSenderId: "729693332195",
  appId: "1:729693332195:web:160cb90e536eb5457e9bd6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app)



export {
  auth, database
}