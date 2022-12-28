// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBkR7I47co1CTogrDj8MBtVrxL4AnpdQzE",
  authDomain: "bike-ghor.firebaseapp.com",
  projectId: "bike-ghor",
  storageBucket: "bike-ghor.appspot.com",
  messagingSenderId: "106588872140",
  appId: "1:106588872140:web:2fc4bee9a69f3fb0919169",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
